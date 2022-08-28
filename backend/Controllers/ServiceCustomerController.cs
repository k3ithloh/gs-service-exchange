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
    }
}