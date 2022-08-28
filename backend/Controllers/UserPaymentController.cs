using Korzh.EasyQuery.Linq;
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
    public class UserPaymentController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public UserPaymentController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("payment/{purchaseid}")]
        [SwaggerOperation(Summary = "Get an all payments related to a purchase.")]
        public async Task<ActionResult<List<UserPayment>>> GetUserPayments(string purchaseid)
        {
            var userPayments = await _context.UserPayments
                .Where(u=>u.PurchaseId == purchaseid)
                .ToListAsync();
            if (userPayments == null)
                return BadRequest("Purchase does not exist");
            return Ok(userPayments);
        }
        
        [HttpPut("paid/{purchaseid}")]
        [SwaggerOperation(Summary = "Mark a payment as paid.")]
        public async Task<ActionResult<List<UserPayment>>> UpdatePaymentStatus(string purchaseid)
        {
            var userPayment = await _context.UserPayments
                .FirstOrDefaultAsync(u => (u.PurchaseId == purchaseid) && (u.Fulfilled == false));
            if (userPayment == null)
                return BadRequest("All Payments have been made");

            userPayment.Fulfilled = true;
            userPayment.PaymentDate = DateTime.Now;
            
            await _context.SaveChangesAsync();
            return Ok(userPayment);
        }
    }
}
