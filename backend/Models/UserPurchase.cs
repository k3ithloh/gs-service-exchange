using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class UserPurchase
{
    public UserPurchase()
    {
        
    }

    public UserPurchase(string purchaseId, DateTime purchaseDate, string customerName, string userId, float amount, int numberOfPayments)
    {
        PurchaseId = purchaseId;
        PurchaseDate = purchaseDate;
        CustomerName = customerName;
        UserId = userId;
        Amount = amount;
        NumberOfPayments = numberOfPayments;
    }
    
    [Key]
    public string PurchaseId { get; set; }
    
    public DateTime PurchaseDate { get; set; }
    
    [ForeignKey("Customer")]
    public string CustomerName { get; set; }
    
    [ForeignKey("User")]
    public string UserId { get; set; }
    
    public float Amount { get; set; }
    
    public int NumberOfPayments { get; set; }

    public virtual Customer? Customer { get; set; }
    public virtual User? User { get; set; }
    
    public ICollection<UserPayment>? UserPayments { get; set; }

}