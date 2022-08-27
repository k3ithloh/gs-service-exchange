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
        [SwaggerOperation(Summary = "Get an array of payments for purchase")]
        public async Task<ActionResult<List<UserPayment>>> GetUserPayments(string purchaseid)
        {
            var user = await _context.UserPayments
                .Where(u=>u.PurchaseId == purchaseid)
                .ToListAsync();
            if (user == null)
                return BadRequest("No Payments has been made for purchase");
            return Ok(user);
        }
    }
}
