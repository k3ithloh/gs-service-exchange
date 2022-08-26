using Microsoft.EntityFrameworkCore;
using rainbow_unicorn.Data.Mappings;

namespace rainbow_unicorn.Data;

public class DataContext : DbContext
{
    public DataContext() { }
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    
    // Creates database tables
    // Degree points to the Degree.cs in models, Degrees refer to the table name in DB
    public DbSet<User> Users { get; set; }
    public DbSet<CreditCard> CreditCards { get; set; }
    public DbSet<Stock> Stocks { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        
        builder.UseIdentityColumns();
        
        var userMap = new UserMap(builder.Entity<User>());
        builder.Entity<User>();
        
        var creditCardMap = new CreditCardMap(builder.Entity<CreditCard>());
        builder.Entity<CreditCard>();
        
        var stockMap = new StockMap(builder.Entity<Stock>());
        builder.Entity<Stock>();
    }
}