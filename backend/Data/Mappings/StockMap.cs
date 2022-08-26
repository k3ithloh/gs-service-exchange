using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class StockMap : BaseMap<Stock>
{
    public StockMap(EntityTypeBuilder<Stock> builder) : base(builder)
    {
        builder.HasKey(e => e.Ticker);
        builder.Property(e => e.Ticker).IsRequired();
        builder.Property(e => e.CurrentClose).IsRequired();
        builder.Property(e => e.LastUpdated).IsRequired();
        builder.Property(e => e.Currency).IsRequired();
    }
}