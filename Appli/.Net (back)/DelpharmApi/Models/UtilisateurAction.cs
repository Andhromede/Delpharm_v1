using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class UtilisateurAction
    {
        public int Id { get; set; }
        public int? IdUtilisateur { get; set; }
        public int? IdFonction { get; set; }
        public int? IdAction { get; set; }
        public string? Commentaire { get; set; }
        public bool? IsNew { get; set; }

        public virtual Action? IdActionNavigation { get; set; }
        public virtual Fonction? IdFonctionNavigation { get; set; }
        public virtual Utilisateur? IdUtilisateurNavigation { get; set; }
    }
}
