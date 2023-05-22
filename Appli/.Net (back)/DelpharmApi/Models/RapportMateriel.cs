using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class RapportMateriel
    {
        public int Id { get; set; }
        public int? IdRapport { get; set; }
        public int? IdMateriel { get; set; }
        public string? ModeExploitation { get; set; }

        public virtual Materiel? IdMaterielNavigation { get; set; }
        public virtual Rapport? IdRapportNavigation { get; set; }
    }
}
