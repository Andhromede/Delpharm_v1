using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class ModeInformation
    {
        public ModeInformation()
        {
            RapportUtilisateurs = new HashSet<RapportUtilisateur>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? Deleted { get; set; }

        public virtual ICollection<RapportUtilisateur> RapportUtilisateurs { get; set; }
    }
}
