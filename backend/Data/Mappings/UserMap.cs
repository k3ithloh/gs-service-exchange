using Microsoft.EntityFrameworkCore.Metadata.Builders;
using rainbow_unicorn.Utilities;

namespace rainbow_unicorn.Data.Mappings;

public class UserMap : BaseMap<User>
{
    public UserMap(EntityTypeBuilder<User> builder) : base(builder)
    {
        builder.HasKey(e => e.Username);
        builder.Property(e => e.Username).IsRequired();
        builder.Property(e => e.PasswordHash).IsRequired();
        builder.Property(e => e.PasswordSalt).IsRequired();

        builder.HasMany(e => e.CreditCards)
            .WithOne(e => e.User)
            .HasForeignKey(e => e.Username)
            .IsRequired();
    }
}