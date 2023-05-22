using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Fichesante
    {
        public int Id { get; set; }
        public DateTime? DateCreation { get; set; }
        public DateTime? DebutAt { get; set; }
        public DateTime? FinAt { get; set; }
        public int? DureeAt { get; set; }
        public DateTime? DateRevision { get; set; }
        public string? MedecinTravail { get; set; }
        public string? PropositionMedecin { get; set; }
        public bool? IsSuivis { get; set; }
        public bool? IsDeleted { get; set; }
        public int IdRapport { get; set; }
        public int IdTypeAt { get; set; }

        public virtual Rapport IdRapportNavigation { get; set; } = null!;
        public virtual Typeat IdTypeAtNavigation { get; set; } = null!;
    }
}
