using System.Collections.Generic;
using System.Linq;

public class Country 
{
    public int Id {get; set; }
    public string Code {get; set; }
    public string Name {get; set; }
    public int Population 
    { 
        get 
        {
            return States.Sum(state => state.Population);
        }
    }
    public virtual ICollection<State> States {get; set;}
}