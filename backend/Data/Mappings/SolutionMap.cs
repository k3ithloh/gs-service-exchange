using System.Collections.Immutable;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class SolutionMap : BaseMap<Solution>
{
    public SolutionMap(EntityTypeBuilder<Solution> builder) : base(builder)
    {
        builder.HasKey(e=>e.SolutionTitle);
        builder.Property(e=>e.SolutionTitle).HasMaxLength(100).IsRequired();
        builder.Property(e => e.Organization).HasMaxLength(150).IsRequired();
        builder.Property(e => e.Description).IsRequired();
        builder.Property(e => e.ReleaseDate).IsRequired();
        builder.Property(e => e.Rating).IsRequired();
        builder.Property(e => e.Category).IsRequired();
        
        builder.HasMany(e => e.Features)
            .WithOne(e => e.Solution)
            .HasForeignKey(e => e.SolutionTitle)
            .IsRequired();
    }
}