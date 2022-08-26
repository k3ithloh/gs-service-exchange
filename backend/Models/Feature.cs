using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace rainbow_unicorn;

public class Feature
{
    public Feature()
    {
        
    }
    
    public Feature(string featureTitle, string description, int solutionId)
    {
        FeatureTitle = featureTitle;
        Description = description;
        SolutionId = solutionId;
    }
    
    [Key]
    public string FeatureTitle { get; set; }
    
    public string Description { get; set; }
    
    [ForeignKey("Solution")]
    public int SolutionId { get; set; }
    
    public virtual Solution? Solution { get; set; }
}