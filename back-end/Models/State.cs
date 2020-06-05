using Newtonsoft.Json;

public class State 
{
    public int Id {get; set; }
    public string Code {get; set; }
    public string Name {get; set; }
    public int Population {get; set;}
    public int CountryID {get; set; }
    [JsonIgnore]
    public virtual Country Country {get; set; }
}