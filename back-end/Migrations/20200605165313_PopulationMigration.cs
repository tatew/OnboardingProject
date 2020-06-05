using Microsoft.EntityFrameworkCore.Migrations;

namespace StatesCountriesApi.Migrations
{
    public partial class PopulationMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Population",
                table: "States",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Population",
                table: "States");
        }
    }
}
