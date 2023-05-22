using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Fichier
    {
        public int Id { get; set; }
        public string? Nom { get; set; }
        public string? Chemin { get; set; }
        public bool? IsDeleted { get; set; }
        public int IdRapport { get; set; }

        public virtual Rapport IdRapportNavigation { get; set; } = null!;
    }
}
