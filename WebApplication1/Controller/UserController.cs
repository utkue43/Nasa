using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
namespace WebApplication1.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>();

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (user == null)
                return BadRequest("Invalid user data.");

            
            if (users.Any(u => u.Username == user.Username))
                return Conflict("Username is already taken.");

           
            users.Add(user);

            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            if (user == null)
                return BadRequest("Invalid user data.");

           
            var existingUser = users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);

            if (existingUser == null)
                return NotFound("User not found or invalid credentials.");

            return Ok("Login successful.");
        }
    }
}
