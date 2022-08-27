using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class Feature
{
    public Feature()
    {
        
    }
    
    public Feature(string featureTitle, string description, int serviceId)
    {
        FeatureTitle = featureTitle;
        Description = description;
        ServiceId = serviceId;
    }
    
    [Key]
    public string FeatureTitle { get; set; }
    
    public string Description { get; set; }
    
    [ForeignKey("Service")]
    public int ServiceId { get; set; }
    
    public virtual Service? Service { get; set; }
}