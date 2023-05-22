using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Fonction
    {
        public Fonction()
        {
            RapportUtilisateurs = new HashSet<RapportUtilisateur>();
            UtilisateurActions = new HashSet<UtilisateurAction>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<RapportUtilisateur> RapportUtilisateurs { get; set; }
        public virtual ICollection<UtilisateurAction> UtilisateurActions { get; set; }
    }
}
