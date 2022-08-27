using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class UserPaymentMap : BaseMap<UserPayment>
{
    public UserPaymentMap(EntityTypeBuilder<UserPayment> builder) : base(builder)
    {
        builder.HasKey(s=> new {s.PurchaseId, s.PaymentNumber});
        builder.Property(s=>s.PurchaseId).IsRequired();
        builder.Property(s => s.PaymentNumber).IsRequired();
        builder.Property(s=>s.Amount).IsRequired();
        builder.Property(s => s.Fulfilled).IsRequired();

        builder.HasOne(s => s.UserPurchase)
            .WithMany(s => s.UserPayments)
            .HasForeignKey(s => s.PurchaseId)
            .IsRequired();

    }
}