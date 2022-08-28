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
    public class ServiceCustomerController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public ServiceCustomerController(DataContext context)
        {
            _context = context;
        }


        // Add a new subscription
        [HttpPost]
        [SwaggerOperation("Adds a new subscription for a customer.")]
        public async Task<ActionResult<List<ServiceCustomer>>> AddSubscription(int serviceId, string customerName)
        {
            var newSubscription = await _context.ServiceCustomers
                .FirstOrDefaultAsync(x => (x.ServiceId == serviceId) && (x.CustomerName == customerName));
            if (newSubscription != null)
                return Conflict("Subscription already exists for customer.");
                
            DateTime datePurchased = DateTime.Now;
            var serviceCustomer = new ServiceCustomer(customerName, serviceId, datePurchased, 0);
            await _context.ServiceCustomers.AddAsync(serviceCustomer);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.ServiceCustomers.ToListAsync());
        }
        
        // Check if user is already subscribed to the service
        [HttpGet("CheckSubscription/{customerName}/{serviceId}")]
        [SwaggerOperation("Returns a bool to indicate if a customer is already subscribed to the service.")]
        public async Task<ActionResult<bool>> CheckSubscription(int serviceId, string customerName)
        {
            var subscription = await _context.ServiceCustomers
                .FirstOrDefaultAsync(x => (x.ServiceId == serviceId) && (x.CustomerName == customerName));
            if (subscription != null)
                return true;
            return false;
        }
        
        [HttpGet("GetAllSubscriptions/{customerName}")]
        [SwaggerOperation("Get all the services that a Customer subscribed to.")]
        public async Task<ActionResult<bool>> GetAllSubscriptions(string customerName)
        {
            var subscription = await _context.ServiceCustomers
                .Where(x => x.CustomerName == customerName)
                .Include(x=>x.Service)
                .ToListAsync();
            
            if (subscription == null)
                return BadRequest("Customer did not subscribe to any service");
            return Ok(subscription);
        }
    }
}