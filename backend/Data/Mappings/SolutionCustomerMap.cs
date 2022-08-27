using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class SolutionCustomerMap : BaseMap<SolutionCustomer>
{
    public SolutionCustomerMap(EntityTypeBuilder<SolutionCustomer> builder) : base(builder)
    {
        builder.HasKey(e => new{ e.SolutionId, e.CustomerName});
        builder.Property(e => e.SolutionId).IsRequired();
        builder.Property(e=>e.CustomerName).IsRequired();

        builder.HasOne(e => e.Solution)
            .WithMany(e => e.SolutionCustomers)
            .HasForeignKey(e => e.SolutionId)
            .IsRequired();

        builder.HasOne(e => e.Customer)
            .WithMany(e => e.SolutionCustomers)
            .HasForeignKey(e => e.CustomerName)
            .IsRequired();

    }
}