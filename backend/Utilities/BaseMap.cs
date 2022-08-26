using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace rainbow_unicorn.Utilities;

public class BaseMap<T> where T : class
{
    public BaseMap(EntityTypeBuilder<T> entityBuilder)
    {
        // entityBuilder.HasKey(x => x.Id);
    }
}