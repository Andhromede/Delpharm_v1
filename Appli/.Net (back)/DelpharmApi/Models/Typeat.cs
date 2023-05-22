using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Typeat
    {
        public Typeat()
        {
            Fichesantes = new HashSet<Fichesante>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Fichesante> Fichesantes { get; set; }
    }
}
