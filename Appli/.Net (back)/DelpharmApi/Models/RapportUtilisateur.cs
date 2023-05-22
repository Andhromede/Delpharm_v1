using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class RapportUtilisateur
    {
        public int Id { get; set; }
        public int? IdUtilisateur { get; set; }
        public int? IdModeInformation { get; set; }
        public int? IdFonction { get; set; }
        public int? IdRapport { get; set; }
        public string? Commentaire { get; set; }
        public bool? IsAnalyseAChaud { get; set; }
        public DateTime? DateValidation { get; set; }
        public bool? IsIntervenu { get; set; }
        public DateTime? DateConnaissance { get; set; }
        public bool? IsTransporte { get; set; }
        public bool? IsInterne { get; set; }
        public bool? IsNew { get; set; }

        public virtual Fonction? IdFonctionNavigation { get; set; }
        public virtual ModeInformation? IdModeInformationNavigation { get; set; }
        public virtual Rapport? IdRapportNavigation { get; set; }
        public virtual Utilisateur? IdUtilisateurNavigation { get; set; }
    }
}
