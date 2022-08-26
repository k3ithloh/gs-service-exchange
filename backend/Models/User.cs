using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class User
{
    public User()
    {
        
    }

    public User(string username, byte[] passwordHash, byte[] passwordSalt)
    {
        Username = username;
        PasswordHash = passwordHash;
        PasswordSalt = passwordSalt;
    }
    
    [Key]
    public string Username { get; set; } = string.Empty;
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public ICollection<CreditCard>? CreditCards { get; set; }
}