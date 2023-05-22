using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Equipement
    {
        public Equipement()
        {
            EquipementRapports = new HashSet<EquipementRapport>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<EquipementRapport> EquipementRapports { get; set; }
    }
}
