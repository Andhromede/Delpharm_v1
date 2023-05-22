using DelpharmApi.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace DelpharmApi.Helpers
{
    public class SecurityHelpers
    {

    /************ HASH USER PASSWORD ************/
        public static void HashUtilisateurPassword(ref Utilisateur utilisateur)
        {
            byte[] salt = new byte[256 /8];
            using(var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            string b64Salt = Convert.ToBase64String(salt);
            string encryptedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: utilisateur.Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256/8
                ));
            utilisateur.Password = b64Salt + "$" + encryptedPassword;
        }


    /************ VERIFY USER PASSWORD ************/
        public static bool VerifyUtilisateurPassword(Utilisateur storedUtilisateur, Utilisateur utilisateur)
        {
            string storedEncryptedPassword = storedUtilisateur.Password.Split('$')[1];
            string b64Salt = storedUtilisateur.Password.Split('$')[0];
            byte[] salt = Convert.FromBase64String(b64Salt);
            string inputEncryptedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
               password: utilisateur.Password,
               salt: salt,
               prf: KeyDerivationPrf.HMACSHA256,
               iterationCount: 10000,
               numBytesRequested: 256 / 8
           ));
            return storedEncryptedPassword == inputEncryptedPassword;
        }


    /************ ICONFIGURATION ************/
        private static IConfigurationRoot _configuration = new ConfigurationBuilder()
                    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                    .AddJsonFile("appsettings.json")
                    .Build();


    /************ CREATE TOKEN ************/
        public static string CreateJwt(Utilisateur utilisateur)
        {
            var test = _configuration["Jwt:SigningKey"];

            var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Id", utilisateur.Id.ToString()),
                        new Claim("Matricule", utilisateur.Matricule),
                        new Claim("Role", utilisateur.IdRoleNavigation.Nom)
                    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: signIn);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    /************ VALIDE THE TOKEN ************/
        public static bool ValidateJwt(string token)
        {
            var tokenParams = new TokenValidationParameters()
            {
                RequireExpirationTime = true,
                ValidateLifetime = true,
                ValidateIssuer = true,
                ValidIssuer = _configuration["Jwt:Issuer"],
                ValidateAudience = true,
                ValidAudience = _configuration["Jwt:Audience"],
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]))
            };
            SecurityToken? validated = null;
            try
            {
                new JwtSecurityTokenHandler().ValidateToken(token, tokenParams, out validated);
            }
            catch (Exception)
            {
                validated = null;
            }
            return validated != null;
        }
    }
    

}
