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
        
        [HttpPost]
        [SwaggerOperation("Adds a stock to customer dashboard.")]
        public async Task<ActionResult<List<CustomerStock>>> AddStockToDashboard(string ticker, string customerName, string interval)
        {
            var customerStock = new CustomerStock(ticker, customerName, interval);
            await _context.CustomerStocks.AddAsync(customerStock);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.CustomerStocks.ToListAsync());
        }
    }
}