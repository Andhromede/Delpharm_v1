using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Secour
    {
        public Secour()
        {
            RapportSecours = new HashSet<RapportSecour>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsInterne { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<RapportSecour> RapportSecours { get; set; }
    }
}
