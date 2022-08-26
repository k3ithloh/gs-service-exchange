namespace rainbow_unicorn;

public class Stock
{
    public Stock()
    {
    }

    public Stock(string ticker, float currentClose, DateTime lastUpdated, string currency)
    {
        Ticker = ticker;
        CurrentClose = currentClose;
        LastUpdated = lastUpdated;
        Currency = currency;
    }

    public string Ticker { get; set; } = string.Empty;
    public float CurrentClose { get; set; }
    public DateTime LastUpdated { get; set; }
    public string Currency { get; set; }
}