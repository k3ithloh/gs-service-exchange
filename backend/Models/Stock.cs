namespace rainbow_unicorn;

public class Stock
{
    public Stock()
    {
    }

    public Stock(string ticker, float currentClose, DateTime lastUpdated, string currency, string stockType)
    {
        Ticker = ticker;
        CurrentClose = currentClose;
        LastUpdated = lastUpdated;
        Currency = currency;
        StockType = stockType;
    }

    public string Ticker { get; set; } = string.Empty;
    public float CurrentClose { get; set; }
    public DateTime LastUpdated { get; set; }
    public string Currency { get; set; }
    public string StockType { get; set; }
    
    public ICollection<CustomerStock>? CustomerStocks { get; set; }
    
}