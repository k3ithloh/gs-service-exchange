using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class Feature
{
    public Feature()
    {
        
    }
    
    public Feature(string featuretitle, string description, string solutiontitle)
    {
        FeatureTitle = featuretitle;
        Description = description;
        SolutionTitle = solutiontitle;
    }
    
    [Key]
    public string FeatureTitle { get; set; }
    
    public string Description { get; set; }
    
    [ForeignKey("Solution")]
    public string SolutionTitle { get; set; }
    
    public virtual Solution? Solution { get; set; }
}