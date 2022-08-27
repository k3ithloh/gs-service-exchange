using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class CustomerLoginDto
{
    [Key]
    public string CustomerName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}