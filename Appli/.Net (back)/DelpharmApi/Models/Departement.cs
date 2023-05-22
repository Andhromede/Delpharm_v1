using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Departement
    {
        public Departement()
        {
            Services = new HashSet<Service>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public string? Acronyme { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Service> Services { get; set; }
    }
}
