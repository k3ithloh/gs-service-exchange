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
    public class SolutionController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public SolutionController(DataContext context)
        {
            _context = context;
        }


        // Get all Solutions
        [HttpGet]
        public async Task<ActionResult<List<Solution>>> Get()
        {
            return Ok(await _context.Solutions
                .ToListAsync());
        }


        // Get a Solution based on a given SoltutionTitle
        [HttpGet("{SolutionTitle}")]
        public async Task<ActionResult<List<Stock>>> Get(string solutiontitle)
        {
            var solution = await _context.Solutions
                .FirstOrDefaultAsync(b => b.SolutionTitle == solutiontitle);
            if (solution == null)
                return BadRequest("Solution not found.");
            return Ok(solution);
        }
        
    }
}
