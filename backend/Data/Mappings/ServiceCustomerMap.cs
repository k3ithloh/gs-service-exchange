using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class ServiceCustomerMap : BaseMap<ServiceCustomer>
{
    public ServiceCustomerMap(EntityTypeBuilder<ServiceCustomer> builder) : base(builder)
    {
        builder.HasKey(e => new{ e.ServiceId, e.CustomerName});
        builder.Property(e => e.ServiceId).IsRequired();
        builder.Property(e=>e.CustomerName).IsRequired();
        builder.Property(e=>e.DatePurchased).IsRequired();
        builder.Property(e=>e.AmountPayable).IsRequired();

        builder.HasOne(e => e.Service)
            .WithMany(e => e.ServiceCustomers)
            .HasForeignKey(e => e.ServiceId)
            .IsRequired();

        builder.HasOne(e => e.Customer)
            .WithMany(e => e.ServiceCustomers)
            .HasForeignKey(e => e.CustomerName)
            .IsRequired();

    }
}