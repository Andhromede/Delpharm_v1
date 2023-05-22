using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Siegelesion
    {
        public Siegelesion()
        {
            RapportTraumas = new HashSet<RapportTrauma>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<RapportTrauma> RapportTraumas { get; set; }
    }
}
