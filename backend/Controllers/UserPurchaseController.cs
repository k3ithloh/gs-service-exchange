using Korzh.EasyQuery.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rainbow_unicorn.Data;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "rainbow-unicorn-customer")]
    public class UserPurchaseController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public UserPurchaseController(DataContext context)
        {
            _context = context;
        }

        // Get a UserPurchase given a PurchaseId)
        [HttpGet("{purchaseid}")]
        // [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<User>>> Get(string purchaseid)
        {
            var query = await _context.UserPurchases
                .FirstOrDefaultAsync(u=>u.PurchaseId == purchaseid);
            if (query == null)
                return BadRequest("No Purchase found");
            return Ok(query);
        }


        // Add a new UserPurchase
        [HttpPost]
        // [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<UserPurchase>>> AddUser(UserPurchase userpurchase)
        {
            var userPurchase = await _context.UserPurchases
                .FirstOrDefaultAsync(u=>u.PurchaseId == userpurchase.PurchaseId);
            if (userPurchase != null)
                return Conflict("UserPurchase already exists");
            await _context.UserPurchases.AddAsync(userpurchase);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
        

        //Delete a User
        [HttpDelete]
        // [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<ActionResult<List<User>>> DeleteUser(string userid, string customername)
        {
            var user = await _context.Users.FindAsync(userid, customername);
            if (user == null)
                return BadRequest("No Users found.");
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

    }
}
