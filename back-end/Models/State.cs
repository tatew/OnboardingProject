public class State 
{
    public int Id {get; set; }
    public string Code {get; set; }
    public string Name {get; set; }
    public int CountryID {get; set; }
    public Country Country {get; set; }
}