using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class CreditCard
{
    public CreditCard()
    {
        
    }

    public CreditCard(int number, string expiryDate, int cvv, string customerName)
    {
        Number = number;
        ExpiryDate = expiryDate;
        Cvv = cvv;
        CustomerName = customerName;
    }
    public int Number { get; set; }
    
    public string ExpiryDate { get; set; } = string.Empty;
    
    public int Cvv { get; set; }
    
    [ForeignKey("Customer")]
    public string CustomerName { get; set; } = string.Empty;
    
    public Customer Customer { get; set; }
    
}