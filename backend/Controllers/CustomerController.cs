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

        [HttpGet("getNumberOfUsers/{customerName}")]
        [SwaggerOperation(Summary = "Get the number of users that a Customer has")]
        public async Task <ActionResult<int>> GetNumberOfUsers(string customerName)
        {
            return Ok(await _context.Users.CountAsync(u => u.CustomerName == customerName));
        }

        [HttpGet("getUserPurchases/{customerName}")]
        [SwaggerOperation(Summary = "Get all the purchases made by users under a Customer.")]
        public async Task<ActionResult<List<Customer>>> GetUserPurchases(string customerName)
        {
            var allPurchases = await _context.UserPurchases
                // .Include(c=>c.UserPurchases)
                .Where(c=>c.CustomerName== customerName)
                .ToListAsync();
            if (allPurchases == null)
            {
                return BadRequest("No User Purchases");
            }
            return Ok(allPurchases);
        }
        
        [HttpGet("GetUserPayments/{customerName}")]
        [SwaggerOperation(Summary = "Get all payments made by users under a Customer.")]
        public async Task<ActionResult<List<Customer>>> GetUserPayments(string customerName)
        {
            
            var allPurchases = await _context.UserPurchases
                .Include(c => c.UserPayments)
                .Where(c => c.CustomerName == customerName)
                .ToListAsync();
            if (allPurchases == null)
            {
                return BadRequest("No User Payments");
            }
            
            var allPayments = new List<UserPaymentDto>();
            foreach (var purchase in allPurchases)
            {
                var paymentList = purchase.UserPayments;
                foreach (var payment in paymentList)
                {
                    var paymentDto = new UserPaymentDto
                    {
                        PurchaseId = payment.PurchaseId,
                        PaymentNumber = payment.PaymentNumber,
                        Amount = payment.Amount,
                        Fulfilled = payment.Fulfilled,
                        DueDate = payment.DueDate,
                        PaymentDate = payment.PaymentDate
                    };
                    allPayments.Add(paymentDto);
                }
            }

            return Ok(allPayments);
        }
        
    }
}