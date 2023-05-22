using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class RapportSecour
    {
        public int Id { get; set; }
        public int? IdRapport { get; set; }
        public int? IdSecours { get; set; }

        public virtual Rapport? IdRapportNavigation { get; set; }
        public virtual Secour? IdSecoursNavigation { get; set; }
    }
}
