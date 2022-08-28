namespace rainbow_unicorn;

public class UserPurchaseDto
{
    public string CustomerName { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public float PurchaseAmount { get; set; }
    public int NumberOfPayments { get; set; }
    public DateTime PurchaseDate { get; set; }
}