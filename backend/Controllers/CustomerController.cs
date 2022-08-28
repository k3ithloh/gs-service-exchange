using System.ComponentModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using rainbow_unicorn.Data;
using Swashbuckle.AspNetCore.Annotations;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "rainbow-unicorn-customer")]
    
    public class CustomerController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public CustomerController(DataContext context)
        {
            _context = context;
        }
        
        // Get a Customer based on a given customerName
        [HttpGet("getCustomerDetails/{customerName}")]
        [SwaggerOperation(Summary = "Get customer details")]
        public async Task<ActionResult<List<Customer>>> GetGetCustomerDetails(string customerName)

        {
            var customer = await _context.Customers
                .Include(c=>c.ServiceCustomers)
                .FirstOrDefaultAsync(u => u.CustomerName == customerName);
            if (customer == null)
                return BadRequest("Customer not found.");
            return Ok(customer);
        }
        
        [HttpGet("getCustomerServices/{customerName}")]
        [SwaggerOperation(Summary = "Get all the services that a Customer subscribed to.")]
        // Get all subscriptions to services
        public async Task<ActionResult<List<Customer>>> GetCustomerServices(string customerName)
        {
            var customer = await _context.Customers
                .Include(c=>c.ServiceCustomers)
                .FirstOrDefaultAsync(u => u.CustomerName == customerName);
            var services = customer.ServiceCustomers;
            if (services == null)
                return BadRequest("Customer is not subscribed to any services.");
            return Ok(services);
        }
        
        [HttpGet("getNumberOfUsers/{customerName}")]
        [SwaggerOperation(Summary = "Get the number of users that a Customer has")]
        public async Task <ActionResult<int>> GetNumberOfUsers(string customerName)
        {
            return Ok(await _context.Users.CountAsync(u => u.CustomerName == customerName));
        }

        [HttpGet("getStocks/{customerName}")]
        [SwaggerOperation(Summary = "Get all the stocks that a Customer added to their dashboard.")]
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
    }
}