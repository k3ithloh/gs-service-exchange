using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class SolutionCustomer
{
    public SolutionCustomer()
    {
        
    }

    public SolutionCustomer(string customerName, int solutionId, DateTime datePurchased, float amountPayable)
    {
        CustomerName = customerName;
        SolutionId = solutionId;
        DatePurchased = datePurchased;
        AmountPayable = amountPayable;
    }
    [ForeignKey("Customer")]
    public string CustomerName { get; set; } = string.Empty;
    [ForeignKey("Solution")]
    public int SolutionId { get; set; }
    public DateTime DatePurchased { get; set; }
    public float AmountPayable { get; set; }
    
    public virtual Customer Customer { get; set; }
 
    public virtual Solution Solution { get; set; }
}