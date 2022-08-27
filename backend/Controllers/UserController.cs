using Korzh.EasyQuery.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rainbow_unicorn.Data;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "rainbow-unicorn-user")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public UserController(DataContext context)
        {
            _context = context;
        }


        // Get all Users
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _context.Stocks
                .ToListAsync());
        }

        // Get all Users given a CustomerName (customername)
        [HttpGet("{customername}")]
        public async Task<ActionResult<List<User>>> Get(string customername)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u=>u.CustomerName == customername);
            if (user == null)
                return BadRequest("No Users found");
            return Ok(user);
        }

        // Get a User based on a given userid and customername {userid}/{customername}
        [HttpGet("{userid}/{customername}")]
        public async Task<ActionResult<List<User>>> Get(string userid, string customername)
        {
            var user = await _context.Users
                .FindAsync(userid,customername);
            if (user == null)
                return BadRequest("No Users found.");
            return Ok(user);
        }
        

        // Add a new User
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
        

        //Delete a User
        [HttpDelete]
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
