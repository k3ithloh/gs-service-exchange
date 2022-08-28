using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class UserPaymentDto
{
    public string PurchaseId { get; set; }
    public int PaymentNumber { get; set; }
    public float Amount { get; set; }
    public bool Fulfilled { get; set; }
    
    public DateTime DueDate { get; set; }
    public DateTime? PaymentDate { get; set; }
}
