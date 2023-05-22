using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class RapportTrauma
    {
        public int Id { get; set; }
        public int IdCote { get; set; }
        public int IdSiegeLesion { get; set; }
        public int IdTraumatisme { get; set; }
        public int IdRapport { get; set; }

        public virtual Cote IdCoteNavigation { get; set; } = null!;
        public virtual Rapport IdRapportNavigation { get; set; } = null!;
        public virtual Siegelesion IdSiegeLesionNavigation { get; set; } = null!;
        public virtual Traumatisme IdTraumatismeNavigation { get; set; } = null!;
    }
}
