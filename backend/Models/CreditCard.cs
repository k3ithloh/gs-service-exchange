using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class CreditCard
{
    public CreditCard()
    {
        
    }

    public CreditCard(int number, string expiryDate, int cvv, string username)
    {
        Number = number;
        ExpiryDate = expiryDate;
        Cvv = cvv;
        Username = username;
    }
    public int Number { get; set; }
    
    public string ExpiryDate { get; set; } = string.Empty;
    
    public int Cvv { get; set; }
    
    [ForeignKey("User")]
    public string Username { get; set; } = string.Empty;
    
    public User User { get; set; }
    
}