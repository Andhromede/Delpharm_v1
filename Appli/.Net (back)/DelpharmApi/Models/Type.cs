using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Type
    {
        public Type()
        {
            Rapports = new HashSet<Rapport>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public string? Acronyme { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Rapport> Rapports { get; set; }
    }
}
