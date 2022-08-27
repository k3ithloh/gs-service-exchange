using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class CustomerRegisterDto
{
    [Key]
    public string CustomerName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}