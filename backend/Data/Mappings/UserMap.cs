using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class UserMap : BaseMap<User>
{
    public UserMap(EntityTypeBuilder<User> builder) : base(builder)
    {
        builder.HasKey(x => new { x.UserId, x.CustomerName});
        builder.Property(x=>x.UserId).IsRequired();
        builder.Property(x=>x.CustomerName).IsRequired();
        
        builder.HasOne(x => x.Customer)
            .WithMany(x => x.Users)
            .HasForeignKey(x => x.CustomerName)
            .IsRequired();
        
        builder.HasMany(x => x.UserPurchases)
            .WithOne(x => x.User)
            .HasForeignKey(x => new { x.UserId, x.CustomerName })
            .IsRequired();


    }
}
