using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Csp
    {
        public Csp()
        {
            Utilisateurs = new HashSet<Utilisateur>();
        }

        public int Id { get; set; }
        public string Nom { get; set; } = null!;
        public string? Acronyme { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Utilisateur> Utilisateurs { get; set; }
    }
}
