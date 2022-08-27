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
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public UserController(DataContext context)
        {
            _context = context;
        }
        
        // Get all Users under a customer
        [HttpGet("{customerName}")]
        [SwaggerOperation(Summary = "Get users under a customer")]
        public async Task<ActionResult<List<User>>> GetCustomerUser(string customerName)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u=>u.CustomerName == customerName);
            if (user == null)
                return BadRequest("No Users found");
            return Ok(user);
        }

        // Add a new User when user makes a payment
        // user id needs to be randomly generated, customername, get from frontend, datetime auto generate
        [HttpPost]
        [SwaggerOperation(Summary = "Add new user when user makes a purchase")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
        
        //Delete a User
        [HttpDelete]
        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<User>>> DeleteUser(string userid)
        {
            var user = await _context.Users.FindAsync(userid);
            if (user == null)
                return BadRequest("No Users found.");
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("purchase/{userid}")]
        [SwaggerOperation(Summary = "Get an array of purchases by user")]
        public async Task<ActionResult<List<User>>> GetUserPurchases(string userid)
        {
            var user = await _context.Users
                .Include(u=>u.UserPurchases)
                .FirstOrDefaultAsync(u=>u.UserId == userid);
            if (user == null)
                return BadRequest("User has no purchases");
            return Ok(user);
        }
        
    }
}
