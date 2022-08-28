using System.Text.Json;

namespace rainbow_unicorn.Data;

public class DataSeeder
{
    private readonly DataContext _db;
    private readonly IWebHostEnvironment _env;

    public DataSeeder(DataContext db, IWebHostEnvironment env)
    {
        _db = db;
        _env = env;
    }

    
    // private method for Seeder Methods to get the data according to the specified model
    private string GetData(string modelName)
    {
        string rootPath = _env.ContentRootPath;
        string fileName = modelName + ".json";
        string filePath = Path.GetFullPath(Path.Combine(rootPath, "Data", "JsonFiles", fileName));
        using (var r = new StreamReader(filePath))
        {
            string json = r.ReadToEnd();
            return json;
        }
    }
    
    // Seeder Methods for each model

    // public void SeedStocks()
    // {
    //     string data = GetData("Stocks");
    //     var items = JsonSerializer.Deserialize<List<Dictionary<string, string>>>(data);
    //     foreach (var item in items)
    //     {
    //         var s = new Stock(item["Ticker"], item["StockType"]);
    //         _db.Stocks.Add(s);
    //         _db.SaveChanges();
    //     }
    // }

    public void SeedServices()
    {
        string data = GetData("Services");
        var items = JsonSerializer.Deserialize<List<Dictionary<string, string>>>(data);
        foreach (var item in items)
        {
            int serviceId = int.Parse(item["ServiceId"]);
            int rating = int.Parse(item["Rating"]);
            DateTime releaseDate = DateTime.Parse(item["ReleaseDate"]);
            bool newservice = bool.Parse(item["New"]);
            var s = new Service(serviceId,
                                item["ServiceTitle"], 
                                item["Organisation"], 
                                item["Description"], 
                                releaseDate, 
                                rating, 
                                item["Category"],
                                newservice);
            _db.Services.Add(s);
            _db.SaveChanges();
        }
    }

    public void SeedFeatures()
    {
        string data = GetData("Features");
        var items = JsonSerializer.Deserialize<List<Dictionary<string, string>>>(data);
        foreach (var item in items)
        {
            int serviceId = int.Parse(item["ServiceId"]);
            var f = new Feature(item["FeatureTitle"], 
                                item["Description"],
                                serviceId);
            _db.Features.Add(f);
            _db.SaveChanges();
        }
    }

    public void SeedUsers()
    {
        string data = GetData("Users");
        var items = JsonSerializer.Deserialize<List<Dictionary<string, string>>>(data);
        foreach (var item in items)
        {
            DateTime createdDate = DateTime.Parse(item["CreatedDate"]);
            var u = new User(item["UserId"],item["CustomerName"], createdDate);
            _db.Users.Add(u);
            _db.SaveChanges();
        }
    }
}