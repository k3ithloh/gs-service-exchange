using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class SolutionCustomer
{
    public SolutionCustomer()
    {
        
    }

    public SolutionCustomer(string customerName, int solutionId)
    {
        CustomerName = customerName;
        SolutionId = solutionId;
    }
    [ForeignKey("Customer")]
    public string CustomerName { get; set; } = string.Empty;
    [ForeignKey("Solution")]
    public int SolutionId { get; set; }
    
    public virtual Customer Customer { get; set; }
 
    public virtual Solution Solution { get; set; }
}