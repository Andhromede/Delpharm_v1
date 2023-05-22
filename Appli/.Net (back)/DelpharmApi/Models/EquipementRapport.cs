using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class EquipementRapport
    {
        public int Id { get; set; }
        public int? IdRapport { get; set; }
        public int? IdEquipement { get; set; }
        public bool? IsNecessaire { get; set; }
        public bool? IsUtilise { get; set; }

        public virtual Equipement? IdEquipementNavigation { get; set; }
        public virtual Rapport? IdRapportNavigation { get; set; }
    }
}
