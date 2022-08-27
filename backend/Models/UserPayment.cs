using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class UserPayment
{
    public UserPayment()
    {
        
    }

    public UserPayment(string purchaseId, int paymentNumber, float amount, bool fulfilled)
    {
        PurchaseId = purchaseId;
        PaymentNumber = paymentNumber;
        Amount = amount;
        Fulfilled = fulfilled;
    }
    
    [ForeignKey("UserPurchase")]
    public string PurchaseId { get; set; }
    public int PaymentNumber { get; set; }
    public float Amount { get; set; }
    public bool Fulfilled { get; set; }
    
    
    public virtual UserPurchase? UserPurchase { get; set; }
    
}