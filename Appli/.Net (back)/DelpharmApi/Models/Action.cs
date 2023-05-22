using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Action
    {
        public Action()
        {
            SousActionIdActionNavigations = new HashSet<SousAction>();
            SousActionIdSousActionNavigations = new HashSet<SousAction>();
            UtilisateurActions = new HashSet<UtilisateurAction>();
        }

        public int Id { get; set; }
        public string? Titre { get; set; }
        public DateTime? DateCreation { get; set; }
        public string? Description { get; set; }
        public string? Reponse { get; set; }
        public DateTime? ValidationHse { get; set; }
        public DateTime? ValidationPilote { get; set; }
        public DateTime? ValidationPorteur { get; set; }
        public DateTime? Delai { get; set; }
        public bool? IsImmediate { get; set; }
        public bool? IsDeleted { get; set; }
        public int IdPriorite { get; set; }
        public int IdCriticite { get; set; }
        public int IdEtat { get; set; }
        public int IdRapport { get; set; }

        public virtual Criticite IdCriticiteNavigation { get; set; } = null!;
        public virtual Etat IdEtatNavigation { get; set; } = null!;
        public virtual Priorite IdPrioriteNavigation { get; set; } = null!;
        public virtual Rapport IdRapportNavigation { get; set; } = null!;
        public virtual ICollection<SousAction> SousActionIdActionNavigations { get; set; }
        public virtual ICollection<SousAction> SousActionIdSousActionNavigations { get; set; }
        public virtual ICollection<UtilisateurAction> UtilisateurActions { get; set; }
    }
}
