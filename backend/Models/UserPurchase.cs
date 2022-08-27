using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class UserPurchase
{
    public UserPurchase()
    {
        
    }

    public UserPurchase(string purchaseid, DateTime purchasedate, string customername, string userid, float amount, int numberofpayments)
    {
        PurchaseId = purchaseid;
        PurchaseDate = purchasedate;
        CustomerName = customername;
        UserId = userid;
        Amount = amount;
        NumberOfPayments = numberofpayments;
    }
    
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