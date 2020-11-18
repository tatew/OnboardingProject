using Microsoft.EntityFrameworkCore;

namespace StatesCountriesApi.Models 
{
    public class CountryContext : DbContext
    {
        public DbSet<Country> Countries {get; set;}
        public DbSet<State> States {get;set;}
        public DbSet<User> Users { get; set; }

        public CountryContext(DbContextOptions<CountryContext> options)
            : base(options)
        {
            
        }
    }
}