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
    
    public class CustomerController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public CustomerController(DataContext context)
        {
            _context = context;
        }
        
        // Get a Customer based on a given customerName
        [HttpGet("{customerName}")]
        [SwaggerOperation(Summary = "Get customer details")]
        public async Task<ActionResult<List<Customer>>> Get(string customerName)
        {
            var customer = await _context.Customers
                .Include(c=>c.SolutionCustomers)
                .FirstOrDefaultAsync(u => u.CustomerName == customerName);
            if (customer == null)
                return BadRequest("Customer not found.");
            return Ok(customer);
        }
    }
}