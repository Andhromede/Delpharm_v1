using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Service
    {
        public Service()
        {
            Rapports = new HashSet<Rapport>();
            Utilisateurs = new HashSet<Utilisateur>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public string? Acronyme { get; set; }
        public bool? IsInterne { get; set; }
        public bool? IsDeleted { get; set; }
        public int IdDepartement { get; set; }

        public virtual Departement IdDepartementNavigation { get; set; } = null!;
        public virtual ICollection<Rapport> Rapports { get; set; }
        public virtual ICollection<Utilisateur> Utilisateurs { get; set; }
    }
}
