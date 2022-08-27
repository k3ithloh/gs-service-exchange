using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class ServiceMap : BaseMap<Service>
{
    public ServiceMap(EntityTypeBuilder<Service> builder) : base(builder)
    {
        builder.HasKey(s=>s.ServiceId);
        builder.Property(s=>s.ServiceId).IsRequired();
        builder.Property(s=>s.ServiceTitle).HasMaxLength(100).IsRequired();
        builder.Property(s => s.Organisation).HasMaxLength(150).IsRequired();
        builder.Property(s => s.Description).IsRequired();
        builder.Property(s => s.ReleaseDate).IsRequired();
        builder.Property(s => s.Rating).IsRequired();
        builder.Property(s => s.Category).IsRequired();
        builder.Property(s => s.New).IsRequired();
        
        builder.HasMany(s => s.Features)
            .WithOne(f => f.Service)
            .HasForeignKey(f => f.ServiceId)
            .IsRequired();
        
        builder.HasMany(e => e.ServiceCustomers)
            .WithOne(e => e.Service)
            .HasForeignKey(e => e.ServiceId)
            .IsRequired();
    }
}