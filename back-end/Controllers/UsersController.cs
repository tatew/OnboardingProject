using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using StatesCountriesApi.Models;

using System;
using System.Linq;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;


namespace StatesCountriesApi.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private CountryContext _context;
        public UsersController(CountryContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User incomingUser)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == incomingUser.Username && u.Password == incomingUser.Password);
            
            if (user == null)
            {
                return BadRequest("Incorrect email or password");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Top_Secret_Key123");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {new Claim(ClaimTypes.Name, user.Id.ToString())}),
                Expires = DateTime.UtcNow.AddDays(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new 
            {
                user.Id,
                Token = tokenString
            });
        } 
    }
}