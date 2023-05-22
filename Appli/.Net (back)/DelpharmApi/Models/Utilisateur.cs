using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Utilisateur
    {
        public Utilisateur()
        {
            RapportUtilisateurs = new HashSet<RapportUtilisateur>();
            UtilisateurActions = new HashSet<UtilisateurAction>();
        }

        public int Id { get; set; }
        public string Matricule { get; set; } = null!;
        public string? Sexe { get; set; }
        public string? Nom { get; set; }
        public string? Prenom { get; set; }
        public string? Email { get; set; }
        public string Password { get; set; } = null!;
        public string? Telephone { get; set; }
        public DateTime? DateNaissance { get; set; }
        public bool? IsActif { get; set; }
        public bool? IsUap { get; set; }
        public bool? IsChef { get; set; }
        public bool IsDeleted { get; set; }
        public int? IdService { get; set; }
        public int? IdContrat { get; set; }
        public int? IdCsp { get; set; }
        public int? IdPoste { get; set; }
        public int IdRole { get; set; }

        public virtual Contrat? IdContratNavigation { get; set; }
        public virtual Csp? IdCspNavigation { get; set; }
        public virtual Poste? IdPosteNavigation { get; set; }
        public virtual Role IdRoleNavigation { get; set; } = null!;
        public virtual Service? IdServiceNavigation { get; set; }
        public virtual ICollection<RapportUtilisateur> RapportUtilisateurs { get; set; }
        public virtual ICollection<UtilisateurAction> UtilisateurActions { get; set; }
    }
}
