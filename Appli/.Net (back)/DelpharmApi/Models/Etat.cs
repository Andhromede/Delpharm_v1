using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Etat
    {
        public Etat()
        {
            Actions = new HashSet<Action>();
            Rapports = new HashSet<Rapport>();
        }

        public int Id { get; set; }
        public string? Nom { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Action> Actions { get; set; }
        public virtual ICollection<Rapport> Rapports { get; set; }
    }
}
