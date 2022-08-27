using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class User
{

    public User()
    {
        
    }
    
    public User(string userid, string customername)
    {
        UserId = userid;
        CustomerName = customername;
    }
    

    public string UserId { get; set; }
    public string CustomerName { get; set; }
    
    public ICollection<UserPurchase>? UserPurchases { get; set; }
    
    public virtual Customer? Customer { get; set; }
}