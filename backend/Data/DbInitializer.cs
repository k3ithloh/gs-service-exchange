namespace rainbow_unicorn.Data;

public class DbInitializer
{
    private readonly DataContext _db;
    private readonly IWebHostEnvironment _env;

    public DbInitializer(DataContext db, IWebHostEnvironment env)
    {
        _db = db;
        _env = env;
    }

    public void Seed()
    {
        _db.Database.EnsureCreated();

        // seed entities with no foreign keys first
        if (!_db.Stocks.Any())
        {
            var seeder = new DataSeeder(_db, _env);
            seeder.SeedStocks();
        }
    }
}