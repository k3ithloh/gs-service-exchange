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
        [SwaggerOperation(Summary = "Get a specific User Purchase")]
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
        [SwaggerOperation(Summary = "Add new purchase made by a user.")]
        public async Task<ActionResult<List<UserPurchase>>> AddUserPurchase(UserPurchaseDto userPurchaseDto)
        {
            // update amount payable
            var customerService = await _context.ServiceCustomers
                .FirstOrDefaultAsync(s => (s.CustomerName == userPurchaseDto.CustomerName) && (s.ServiceId == 13));
            if (customerService == null)
                return BadRequest("Customer is not Subscribed to the BNPL Service.");

            customerService.AmountPayable = customerService.AmountPayable + userPurchaseDto.PurchaseAmount;
                    
            
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.UserId == userPurchaseDto.UserId);
            if (user == null)
            {
                user = new User(userPurchaseDto.UserId, userPurchaseDto.CustomerName, userPurchaseDto.PurchaseDate);
                await _context.Users.AddAsync(user);
            }

            // add purchase
            string purchaseId = GenerateId();
            while (PurchaseExists(purchaseId))
            {
                purchaseId = GenerateId();
            }
            var purchase = new UserPurchase(purchaseId, 
                userPurchaseDto.PurchaseDate,
                userPurchaseDto.CustomerName, 
                userPurchaseDto.UserId, 
                userPurchaseDto.PurchaseAmount, 
                userPurchaseDto.NumberOfPayments);
            await _context.UserPurchases.AddAsync(purchase);

            
            // add payments
            float paymentAmount = userPurchaseDto.PurchaseAmount / userPurchaseDto.NumberOfPayments;

            for (int i = 1; i <= userPurchaseDto.NumberOfPayments; i++)
            {
                DateTime duedate = DateTime.Now.AddDays(90);
                var payment = new UserPayment(purchaseId, i, paymentAmount, false, duedate);
                await _context.UserPayments.AddAsync(payment);
            }

            await _context.SaveChangesAsync();

            return Ok(await _context.UserPurchases.ToListAsync());
        }

        private string GenerateId()
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, 36)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private bool PurchaseExists(string purchaseId)
        {
            var purchase = _context.UserPurchases
                .FirstOrDefault(x => x.PurchaseId == purchaseId);
            if (purchase == null)
                return false;
            return true;
        }

    }
}
