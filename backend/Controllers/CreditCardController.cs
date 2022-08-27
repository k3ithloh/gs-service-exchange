// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using rainbow_unicorn.Data;
//
// namespace rainbow_unicorn.Controllers
//
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     [Authorize(Roles = "rainbow-unicorn-customer")]
//     public class CreditCardController : ControllerBase
//     {
//         private readonly DataContext _context;
//
//         // constructor
//         public CreditCardController(DataContext context)
//         {
//             _context = context;
//         }
//
//         // Get a CreditCard based on a given CreditCard Number (number)
//         [HttpGet("{number}")]
//         public async Task<ActionResult<List<CreditCard>>> Get(int number)
//         {
//             var creditCard = await _context.CreditCards
//                 .Include(b=>b.User)
//                 .FirstOrDefaultAsync(b=>b.Number == number);
//             if (creditCard == null)
//                 return BadRequest("Credit card not found.");
//             return Ok(creditCard);
//         }
//         
//         
//         // Add a new CreditCard
//         [HttpPost]
//         public async Task<ActionResult<List<CreditCard>>> AddCreditCard(CreditCard creditCard)
//         {
//             await _context.CreditCards.AddAsync(creditCard);
//             await _context.SaveChangesAsync();
//             
//             return Ok(await _context.CreditCards.ToListAsync());
//         }
//         
//         
//         // Update a CreditCard fields
//         [HttpPut]
//         public async Task<ActionResult<List<CreditCard>>> UpdateCreditCard(CreditCard request)
//         {
//             var creditCard = await _context.CreditCards.FindAsync(request.Number);
//             if (creditCard == null)
//                 return BadRequest("Credit card not found.");
//             
//             creditCard.Number = request.Number;
//             creditCard.ExpiryDate = request.ExpiryDate;
//             creditCard.Cvv = request.Cvv;
//             creditCard.Username = request.Username;
//             
//             await _context.SaveChangesAsync();
//             
//             return Ok(await _context.CreditCards.ToListAsync());
//         }
//         
//         
//         // Delete a CreditCard based on a given CreditCard Number (number)
//         [HttpDelete("{number}")]
//         public async Task<ActionResult<List<CreditCard>>> DeleteCreditCard(int number)
//         {
//             var creditCard = await _context.CreditCards.FindAsync(number);
//             if (creditCard == null)
//                 return BadRequest("Credit card not found.");
//
//             _context.CreditCards.Remove(creditCard);
//             await _context.SaveChangesAsync();
//             
//             return Ok(await _context.CreditCards.ToListAsync());
//         }
//         
//     }
// }