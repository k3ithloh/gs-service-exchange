using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using rainbow_unicorn.Data;
using Swashbuckle.AspNetCore.Annotations;

namespace rainbow_unicorn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        // public static Customer customer = new Customer();
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        // constructors
        public AuthController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")]
        [SwaggerOperation(Summary = "To add account into DB")]
        public async Task<ActionResult<Customer>> Register(CustomerRegisterDto request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
            var customer = new Customer(request.CustomerName, 
                                passwordHash, 
                                passwordSalt, 
                                request.FullName, 
                                request.Email);
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();
            return Ok(await _context.Customers.ToListAsync());
        }

        [HttpPost("login")]
        [SwaggerOperation(Summary = "To log into an existing account in DB")]
        public async Task<ActionResult<string>> Login(CustomerLoginDto request)
        {
            var customer = await _context.Customers
                .FirstOrDefaultAsync(u => u.CustomerName == request.CustomerName);
            if (customer == null)
            {
                return BadRequest("Customer not found");
            }

            if (!VerifyPasswordHash(request.Password, customer.PasswordHash, customer.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }

            string token = CreateToken(customer);
            return Ok(token);
        }

        private string CreateToken(Customer customer)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, customer.CustomerName),
                new Claim(ClaimTypes.Role, "rainbow-unicorn-customer")
            };

            var key = new SymmetricSecurityKey(
                System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }
    }
}