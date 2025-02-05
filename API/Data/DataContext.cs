using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options) //primary ctor
{
    public DbSet<AppUser> Users { get; set; }
    // public DataContext(DbContextOptions options) : base(options)
    // {
    // }
}
