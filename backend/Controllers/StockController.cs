using System.Net;
using Korzh.EasyQuery.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Newtonsoft.Json;
using rainbow_unicorn.Data;
using Swashbuckle.AspNetCore.Annotations;

namespace rainbow_unicorn.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "rainbow-unicorn-customer")]
    public class StockController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        static string _address = String.Format("https://www.alphavantage.co/");
        private string result;
        public StockController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet("{stocktype}/{interval}/{symbol}")]
        [SwaggerOperation("Retrieve a stock data from external API.")]
        public async Task<IActionResult> GetStocks(string stocktype, string interval, string symbol)
        {
            byte[] API_KEY = System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:API_KEY").Value);
            string addressWithQuery = _address + "query?function=" + stocktype + "_" + interval + "&symbol=" + symbol +
                                      "&outputsize=compact&apikey=" + API_KEY;
            WebRequest requestObjGet = WebRequest.Create(addressWithQuery);
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

            
            if (strResultTest.Contains("Error Message"))
                return BadRequest("Stock data not found. Check your inputs. This API only accepts the following values timeRange=DAILY|MONTHLY|WEEKLY and stockType=TIME_SERIES|FX|DIGITAL_CURRENCY");
            // JObject json = JObject.Parse(strResultTest);
            
            return Ok(strResultTest);
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
        [SwaggerOperation("Retrieve stock type base on it's ticker.")]
        public async Task<ActionResult<List<Stock>>> Get(string ticker)
        {
            var stock = await _context.Stocks
                .FirstOrDefaultAsync(b => b.Ticker == ticker);
            if (stock == null)
                return BadRequest("Stock not recorded in our database.");
            return Ok(stock);
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
