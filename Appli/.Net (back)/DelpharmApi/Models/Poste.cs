using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Poste
    {
        public Poste()
        {
            Utilisateurs = new HashSet<Utilisateur>();
        }

        public int Id { get; set; }
        public string Nom { get; set; } = null!;
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Utilisateur> Utilisateurs { get; set; }
    }
}
