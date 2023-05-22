using DelpharmApi.Helpers;
using DelpharmApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using static DelpharmApi.Helpers.DtoRecordsHelpers;


namespace DelpharmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilisateurController : ControllerBase
    {

        private readonly esacpContext _context;

        public UtilisateurController(esacpContext context)
        {
            _context = context;
        }

    /************ FIND USER BY MATRICULE ************/
        [HttpPost]
        [Route("findUserByMatricule")]
        public async Task<IActionResult> FindUserByMatricule(UtilisateurDto utilisateurDto)
        {
            List<Utilisateur> storedUser = _context.Utilisateurs.ToList().FindAll(utilisateur => (utilisateur.Matricule).StartsWith(utilisateurDto.Matricule) && utilisateur.IsDeleted == false);

            if (storedUser == null)
            {
                return BadRequest("Aucun utilisateurs trouvés avec ce Matricule !");
            }
            else
            {
                return Ok(storedUser);
            }

        }

    /************ FIND USER BY NAME ************/
        [HttpPost]
        [Route("findUserByName")]
        public async Task<IActionResult> FindUserByName(UtilisateurDto utilisateurDto)
        {
            List<Utilisateur> storedUser = _context.Utilisateurs.ToList().FindAll(utilisateur => (utilisateur.Nom).StartsWith(utilisateurDto.Nom) && utilisateur.IsDeleted == false);

            if (storedUser == null)
            {
                return BadRequest("Aucun utilisateurs trouvés avec ce Nom !");
            }
            else
            {
                return Ok(storedUser);
            }
            
        }

        /************ FIND USER BY FIRSTNAME ************/
        [HttpPost]
        [Route("findUserByFirstname")]
        public async Task<IActionResult> FindUserByFirstname(UtilisateurDto utilisateurDto)
        {
           List<Utilisateur> storedUser = _context.Utilisateurs.ToList().FindAll(utilisateur => (utilisateur.Prenom).StartsWith(utilisateurDto.Prenom) && utilisateur.IsDeleted == false);

            if (storedUser == null)
            {
                return BadRequest("Aucun utilisateurs trouvés avec ce Prénom !");
            }
            else
            {
                return Ok(storedUser);
            }

        }

        /************ FIND USER BY ID ************/
        [HttpPost]
        [Route("findUserById")]
        public async Task<IActionResult> FindUserById(UtilisateurDto utilisateurDto)
        {
            Utilisateur? storedUser = _context.Utilisateurs.Single(utilisateur => utilisateur.Id == utilisateurDto.Id);

            if (storedUser == null)
            {
                return BadRequest("Aucun utilisateur trouvé avec cet ID !");
            }
            else
            {
                _context.Entry(storedUser).Reference("IdRoleNavigation").Load();
            }

            return Ok(new
            {
                Matricule = storedUser.Matricule,
                Sexe = storedUser.Sexe,
                Nom = storedUser.Nom,
                Prenom = storedUser.Prenom,
                Email = storedUser.Email,
                Telephone = storedUser.Telephone,
                DateNaissance = storedUser.DateNaissance,
                UAP = storedUser.IsUap,
                Chef = storedUser.IsChef,
                Service = storedUser.IdService,
                Contrat = storedUser.IdContrat,
                Csp = storedUser.IdCsp,
                Poste = storedUser.IdPoste,
                Role = storedUser.IdRoleNavigation.Id
            });
        }


        /************ FIND ALL USERS BY ROLE ************/
        [HttpPost]
        [Route("findUserByRole")]
        public async Task<IActionResult> FindUserByRole(UtilisateurDto utilisateurDto)
        {
            List<Utilisateur> storedUser = _context.Utilisateurs.ToList().FindAll(utilisateur => utilisateur.IdRole == utilisateurDto.IdRole && utilisateur.IsDeleted == false);
            return Ok(storedUser);
        }

    }
}
