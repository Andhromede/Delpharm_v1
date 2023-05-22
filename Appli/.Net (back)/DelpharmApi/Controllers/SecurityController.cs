using DelpharmApi.Helpers;
using DelpharmApi.Models;
using Microsoft.AspNetCore.Mvc;
using static DelpharmApi.Helpers.DtoRecordsHelpers;



namespace DelpharmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private readonly esacpContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor; 

        public SecurityController(esacpContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }


        /************ FONCTION D'INSCRIPTION ************/
        [HttpPost]
        [Route("inscription")]
        public async Task<IActionResult> Inscription(UtilisateurDto utilisateurDto)
        {
            Utilisateur? storedUser = _context.Utilisateurs.SingleOrDefault(utilisateur => utilisateur.Matricule == utilisateurDto.Matricule);

            if (storedUser != null)
            {
                return BadRequest("User already exists");
            }

            Utilisateur utilisateur = new Utilisateur() { Matricule = utilisateurDto.Matricule, Password = utilisateurDto.Password, Nom = utilisateurDto.Nom, Prenom = utilisateurDto.Prenom, IdService = utilisateurDto.IdService };
            SecurityHelpers.HashUtilisateurPassword(ref utilisateur);

            _context.Utilisateurs.Add(utilisateur);
            int rowCount = await _context.SaveChangesAsync();

            if (rowCount == 1 && utilisateur.Id > 0)
            {
                return CreatedAtAction("Inscription", new { id = utilisateur.Id }, new { Matricule = utilisateur.Matricule });
            }

            return BadRequest();
        }


        /************ FONCTION DE CONNEXION ************/
        [HttpPost]
        [Route("connexion")]
        public async Task<IActionResult> Connexion(UtilisateurDto utilisateurDto)
        {
            Utilisateur? storedUser = _context.Utilisateurs.Single(utilisateur => utilisateur.Matricule == utilisateurDto.Matricule);

            if (storedUser == null)
            {
                return BadRequest("Invalid Credentials");
            }
            else
            {
                _context.Entry(storedUser).Reference("IdRoleNavigation").Load();
            }

            Utilisateur utilisateur = new Utilisateur() { Matricule = utilisateurDto.Matricule, Password = utilisateurDto.Password };

            bool result = !SecurityHelpers.VerifyUtilisateurPassword(storedUser, utilisateur);

            if (result)
            {
                return BadRequest("Invalid Credentials");
            }

            string token = SecurityHelpers.CreateJwt(storedUser);

            return Ok(new { matricule = storedUser.Matricule, role = storedUser.IdRoleNavigation.Id, result = true, id = storedUser.Id, token });
        }


        /************ VERIFIE SI CONNECTE ************/
        [HttpPost]
        [Route("check")]
        public async Task<IActionResult> Check()
        {
            var cookies = _httpContextAccessor.HttpContext.Request.Cookies["auth"];
            bool result = true ;

            /*return { result:true, role:result.role, id:result.id }*/
            return Ok(cookies);
        }


    /*check = async(params) => {
    const auth = params.cookies.auth;
    if (auth) {
        const result = jwt.verify(auth, appConfig.JWT_SECRET);
        if (result) {
            // console.log(result);
            return { result:true, role:result.role, id:result.id
        }
    }
            }
            return { result: false, role: 0, id: 0 }
        }*/

}
}
