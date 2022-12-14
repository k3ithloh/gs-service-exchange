using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class CreditCardMap : BaseMap<CreditCard>
{
    public CreditCardMap(EntityTypeBuilder<CreditCard> builder) : base(builder)
    {
        builder.HasKey(e => e.Number);
        builder.Property(e => e.Number).IsRequired();
        builder.Property(e => e.ExpiryDate).IsRequired();
        builder.Property(e => e.Cvv).IsRequired();
        builder.Property(e => e.CustomerName).IsRequired();

        builder.HasOne(e => e.Customer)
            .WithMany(e => e.CreditCards)
            .HasForeignKey(e => e.CustomerName)
            .IsRequired();
    }
    
}