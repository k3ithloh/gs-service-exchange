using System.Net;
using Korzh.EasyQuery.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using rainbow_unicorn.Data;
using Swashbuckle.AspNetCore.Annotations;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize(Roles = "rainbow-unicorn-customer")]
    public class StockController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        static string _address = String.Format("https://jsonplaceholder.typicode.com/posts/1/comments");
        private string result;
        public StockController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IActionResult> GetStocks()
        {
            WebRequest requestObjGet = WebRequest.Create(_address);
            requestObjGet.Method = "GET";
            HttpWebResponse responseObjGet = null;
            responseObjGet = (HttpWebResponse) requestObjGet.GetResponse();

            string strResultTest = null;
            using (Stream stream = responseObjGet.GetResponseStream())
            {
                StreamReader sr = new StreamReader(stream);
                strResultTest = sr.ReadToEnd();
                sr.Close();
            }

            return Ok(strResultTest);
            
            
            // byte[] API_KEY = System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:API_KEY").Value);
            // List<Stock> stockList = new List<Stock>();
            // using (var httpClient = new HttpClient())
            // {
            //     using (var response = await httpClient.GetAsync("https://jsonplaceholder.typicode.com/posts/1/comments"))
            //     {
            //         string apiResponse = await response.Content.ReadAsStringAsync();
            //         stockList = JsonConvert.DeserializeObject<List<Stock>>(apiResponse);
            //     }
            // }
            // return Ok(stockList);
        }

        // Get all Stocks
        // [HttpGet]
        // [SwaggerOperation("Gets all stocks from external API.")]
        // public async Task<ActionResult<List<Stock>>> Get()
        // {
        //     // GetResponse();
        //     // return new string[] { result, "value2" };
        //     return Ok(await _context.Stocks
        //         .ToListAsync());
        // }


        // Get a Stock based on a given Stock Ticker (ticker)
        [HttpGet("{ticker}")]
        [SwaggerOperation("Retrieve a stock base on it's ticker.")]
        public async Task<ActionResult<List<Stock>>> Get(string ticker)
        {
            var stock = await _context.Stocks
                .FirstOrDefaultAsync(b => b.Ticker == ticker);
            if (stock == null)
                return BadRequest("Stock not found.");
            return Ok(stock);
        }
        
        private async void GetResponse()
        {
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(_address);
            response.EnsureSuccessStatusCode();
            result = await response.Content.ReadAsStringAsync();
        }


        // // Add a new Stock
        // [HttpPost]
        // [ApiExplorerSettings(IgnoreApi = true)]
        // public async Task<ActionResult<List<Stock>>> AddStock(Stock stock)
        // {
        //     await _context.Stocks.AddAsync(stock);
        //     await _context.SaveChangesAsync();
        //
        //     return Ok(await _context.Stocks.ToListAsync());
        // }
        //
        //
        // // Update a Stock fields
        // [HttpPut]
        // [ApiExplorerSettings(IgnoreApi = true)]
        // public async Task<ActionResult<List<Stock>>> UpdateStock(Stock request)
        // {
        //     var stock = await _context.Stocks.FindAsync(request.Ticker);
        //     if (stock == null)
        //         return BadRequest("Stock not found.");
        //
        //     stock.Ticker = request.Ticker;
        //     stock.StockType = request.StockType;
        //
        //     await _context.SaveChangesAsync();
        //
        //     return Ok(await _context.Stocks.ToListAsync());
        // }
        //
        //
        // // Delete a Stock based on a given Stock Ticker (ticker)
        // [HttpDelete("{ticker}")]
        // [ApiExplorerSettings(IgnoreApi = true)]
        // public async Task<ActionResult<List<Stock>>> DeleteStock(int ticker)
        // {
        //     var stock = await _context.Stocks.FindAsync(ticker);
        //     if (stock == null)
        //         return BadRequest("Stock not found.");
        //
        //     _context.Stocks.Remove(stock);
        //     await _context.SaveChangesAsync();
        //
        //     return Ok(await _context.Stocks.ToListAsync());
        // }
        //
        // // Search for a stock based on an input string
        // [HttpGet("search/{text}")]
        // [ApiExplorerSettings(IgnoreApi = true)]
        // public async Task<ActionResult<List<Stock>>> TextSearch(string text)
        // {
        //     if (!string.IsNullOrEmpty(text))
        //     {
        //         return Ok(await _context.Stocks.FullTextSearchQuery(text).ToListAsync());
        //     }
        //     else
        //     {
        //         return Ok(await _context.Stocks.ToListAsync());
        //     }
        // }
    }
}
