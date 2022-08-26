using System.ComponentModel.DataAnnotations;

namespace rainbow_unicorn;

public class Solution
{
    public Solution()
    {
    }
    
    public Solution(string solutiontitle, string organisation, string description, DateTime releasedate, int rating, string category)
    {
        SolutionTitle = solutiontitle;
        Organisation = organisation;
        Description = description;
        ReleaseDate = releasedate;
        Rating = rating;
        Category = category;
    }

    [Key]
    public string SolutionTitle { get; set; }
    
    public string Organisation { get; set; }
    
    public string Description { get; set; }
    
    public DateTime ReleaseDate { get; set; }
    
    public int Rating { get; set; }
    
    public string Category { get; set; }
    
    public ICollection<Feature>? Features { get; set; }
    
}