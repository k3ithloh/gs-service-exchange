namespace rainbow_unicorn;

public class UserPayment
{
    public UserPayment()
    {
        
    }

    public UserPayment(string purchaseid, int paymentnumber, float amount, bool fulfilled)
    {
        PurchaseId = purchaseid;
        PaymentNumber = paymentnumber;
        Amount = amount;
        Fulfilled = fulfilled;
    }
    
    public string PurchaseId { get; set; }
    public int PaymentNumber { get; set; }
    public float Amount { get; set; }
    public bool Fulfilled { get; set; }
    
    
    public virtual UserPurchase? UserPurchase { get; set; }
}