using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class Service
{
    public Service()
    {
    }
    
    public Service(int serviceId, string servicetitle, string organisation, string description, DateTime releasedate, int rating, string category, bool newservice)
    {
        ServiceId = serviceId;
        ServiceTitle = servicetitle;
        Organisation = organisation;
        Description = description;
        ReleaseDate = releasedate;
        Rating = rating;
        Category = category;
        New = newservice;
    }

    [Key]
    public int ServiceId { get; set; }
    public string ServiceTitle { get; set; }
    
    public string Organisation { get; set; }
    
    public string Description { get; set; }
    
    public DateTime ReleaseDate { get; set; }
    
    public int Rating { get; set; }
    
    public string Category { get; set; }
    
    public bool New { get; set; }
    
    public ICollection<Feature>? Features { get; set; }
    public ICollection<ServiceCustomer>? ServiceCustomers { get; set; }


}