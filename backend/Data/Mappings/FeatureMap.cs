using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class FeatureMap : BaseMap<Feature>
{
    public FeatureMap(EntityTypeBuilder<Feature> builder) : base(builder)
    {
        builder.HasKey(e=>e.FeatureTitle);
        builder.Property(e=>e.FeatureTitle).HasMaxLength(100).IsRequired();
        builder.Property(e => e.Description).IsRequired();
        builder.Property(e => e.SolutionTitle).IsRequired();
        
        builder.HasOne(e => e.Solution)
            .WithMany(e => e.Features)
            .HasForeignKey(e => e.SolutionTitle)
            .IsRequired();
    }
}