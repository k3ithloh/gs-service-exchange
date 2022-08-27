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
    public class ServiceController : ControllerBase
    {
        private readonly DataContext _context;

        // constructor
        public ServiceController(DataContext context)
        {
            _context = context;
        }


        // Get all Services
        [HttpGet]
        [SwaggerOperation(Summary = "Get all existing services by GS")]
        public async Task<ActionResult<List<Service>>> Get()
        {
            return Ok(await _context.Services
                .Include(f=>f.Features)
                .ToListAsync());
        }


        // Get a Service based on a given ServiceId
        [HttpGet("{serviceId}")]
        [SwaggerOperation(Summary = "Retrieve service details base on given ID")]
        public async Task<ActionResult<List<Service>>> Get(int serviceId)
        {
            var service = await _context.Services
                .Include(f=>f.Features)
                .FirstOrDefaultAsync(s => s.ServiceId == serviceId);
            if (service == null)
                return BadRequest("Service not found.");
            return Ok(service);
        }
        
        [HttpGet("AllId")]
        [SwaggerOperation(Summary = "Returns an array of all service IDs")]
        public async Task<ActionResult<List<Service>>> GetServiceId()
        {
            return Ok(await _context.Services
                .Select(s => s.ServiceId)
                .ToListAsync());
        }
    }
}
