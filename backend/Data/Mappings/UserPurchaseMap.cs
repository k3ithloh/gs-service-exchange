using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class UserPurchaseMap : BaseMap<UserPurchase>
{
    public UserPurchaseMap(EntityTypeBuilder<UserPurchase> builder) : base(builder)
    {
        builder.HasKey(s=>s.PurchaseId);
        builder.Property(s=>s.PurchaseDate).IsRequired();
        builder.Property(s=>s.CustomerName).IsRequired();
        builder.Property(s => s.UserId).IsRequired();
        builder.Property(s => s.Amount).IsRequired();
        builder.Property(s => s.NumberOfPayments).IsRequired();

        builder.HasOne(s => s.Customer)
            .WithMany(s => s.UserPurchases)
            .HasForeignKey(s => s.CustomerName)
            .IsRequired();
        
        builder.HasOne(s=>s.User)
            .WithMany(s=>s.UserPurchases)
            .HasForeignKey(s=>s.UserId)
            .IsRequired();

        builder.HasMany(s => s.UserPayments)
            .WithOne(s => s.UserPurchase)
            .HasForeignKey(s => s.PurchaseId)
            .IsRequired();
    }
}