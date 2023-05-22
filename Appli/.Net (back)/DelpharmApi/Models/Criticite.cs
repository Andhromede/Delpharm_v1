using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Criticite
    {
        public Criticite()
        {
            Actions = new HashSet<Action>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public string? Acronyme { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Action> Actions { get; set; }
    }
}
