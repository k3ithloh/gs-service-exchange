using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rainbow_unicorn.Data;
using Swashbuckle.AspNetCore.Annotations;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "rainbow-unicorn-customer")]
    
    public class CustomerStockController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public CustomerStockController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("getCustomerStocks/{customerName}")]
        [SwaggerOperation("Get all the stocks that a Customer added to their dashboard.")]
        public async Task<ActionResult<List<Customer>>> GetStocks(string customerName)
        {
            var allRecords = await _context.CustomerStocks
                .ToListAsync();
            
            var filtered = new List<CustomerStock>();
            
            foreach(var record in allRecords)
            {
                if (record.CustomerName == customerName)
                {
                    filtered.Add(record);
                }
            }
            if (filtered.Count == 0)
                return BadRequest("Customer has no stocks on their dashboard.");
            
            return Ok(filtered);
        }

        [HttpPost("{ticker}/{customerName}/{interval}/{stockType}")]
        [SwaggerOperation("Adds a stock to customer dashboard.")]
        public async Task<ActionResult<List<CustomerStock>>> AddStockToDashboard(string ticker, string customerName, string interval, string stockType)
        {
            var customerStock = await _context.CustomerStocks
                .FirstOrDefaultAsync(cs => (cs.Ticker == ticker) && (cs.CustomerName == customerName));
            if (customerStock != null)
                return Conflict("Stock already on customer's dashboard.");
            
            customerStock = new CustomerStock(ticker, customerName, interval, stockType);
            await _context.CustomerStocks.AddAsync(customerStock);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.CustomerStocks.ToListAsync());
        }
        
        [HttpPut]
        [SwaggerOperation("Update interval for a customer's stock.")]
        public async Task<ActionResult<List<CustomerStock>>> UpdateInterval(CustomerStock customerStock)
        {
            var record = await _context.CustomerStocks
                .FirstOrDefaultAsync(cs => cs.Ticker == customerStock.Ticker & cs.CustomerName == customerStock.CustomerName);
            if (record == null)
                return BadRequest("Stock not found.");
            
            record.Interval = customerStock.Interval;
            await _context.SaveChangesAsync();
            
            return Ok(await _context.CustomerStocks.ToListAsync());
        }
        
        [HttpDelete("{ticker}/{customerName}")]
        [SwaggerOperation("Remove stock from the customer's dashboard.")]
        public async Task<ActionResult<List<CustomerStock>>> DeleteBasket(string ticker, string customerName)
        {
            var customerStock = await _context.CustomerStocks
                .FirstOrDefaultAsync(cs => (cs.Ticker == ticker) && (cs.CustomerName == customerName));
            if (customerStock == null)
                return BadRequest("Stock not found.");

            _context.CustomerStocks.Remove(customerStock);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.CustomerStocks.ToListAsync());
        }
    }
}