using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class ServiceCustomer
{
    public ServiceCustomer()
    {
        
    }

    public ServiceCustomer(string customerName, int serviceId, DateTime datePurchased, float amountPayable)
    {
        CustomerName = customerName;
        ServiceId = serviceId;
        DatePurchased = datePurchased;
        AmountPayable = amountPayable;
    }
    [ForeignKey("Customer")]
    public string CustomerName { get; set; } = string.Empty;
    [ForeignKey("Service")]
    public int ServiceId { get; set; }
    public DateTime DatePurchased { get; set; }
    public float AmountPayable { get; set; }
    
    public virtual Customer Customer { get; set; }
 
    public virtual Service Service { get; set; }
}