using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Materiel
    {
        public Materiel()
        {
            RapportMateriels = new HashSet<RapportMateriel>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<RapportMateriel> RapportMateriels { get; set; }
    }
}
