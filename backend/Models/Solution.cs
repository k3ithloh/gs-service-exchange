using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class Solution
{
    public Solution()
    {
    }
    
    public Solution(string solutiontitle, string organization, string description, datetime releasedate, float rating, string category, string solutionfeature)
    {
        SolutionTitle = solutiontitle;
        Organization = organization;
        Description = description;
        ReleaseDate = releasedate;
        Rating = rating;
        Category = category;
        SolutionFeature = solutionfeature;
    }

    [Key]
    public string SolutionTitle { get; set; }
    
    public string Organization { get; set; }
    
    public string Description { get; set; }
    
    public DateTime ReleaseDate { get; set; }
    
    public int Rating { get; set; }
    
    public string Category { get; set; }
    
    public ICollection<Feature>? Features { get; set; }
    
}