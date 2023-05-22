using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class Rapport
    {
        public Rapport()
        {
            Actions = new HashSet<Action>();
            EquipementRapports = new HashSet<EquipementRapport>();
            Fichesantes = new HashSet<Fichesante>();
            Fichiers = new HashSet<Fichier>();
            RapportMateriels = new HashSet<RapportMateriel>();
            RapportSecours = new HashSet<RapportSecour>();
            RapportTraumas = new HashSet<RapportTrauma>();
            RapportUtilisateurs = new HashSet<RapportUtilisateur>();
        }

        public int Id { get; set; }
        public DateTime? DateAccident { get; set; }
        public DateTime? DateRapport { get; set; }
        public string? MotifDeplacement { get; set; }
        public string? DescriptionSituation { get; set; }
        public string? ActionImmediate { get; set; }
        public string? OccupationVictime { get; set; }
        public string? Comment { get; set; }
        public string? Pourquoi { get; set; }
        public string? Lieu { get; set; }
        public string? Materiel { get; set; }
        public bool? IsRetourPoste { get; set; }
        public bool? IsTravailLeger { get; set; }
        public bool? IsDu { get; set; }
        public bool? IsRdp { get; set; }
        public bool? IsRapportPolice { get; set; }
        public bool? IsDeleted { get; set; }
        public int IdEtat { get; set; }
        public int? IdType { get; set; }
        public int IdService { get; set; }

        public virtual Etat IdEtatNavigation { get; set; } = null!;
        public virtual Service IdServiceNavigation { get; set; } = null!;
        public virtual Type? IdTypeNavigation { get; set; }
        public virtual ICollection<Action> Actions { get; set; }
        public virtual ICollection<EquipementRapport> EquipementRapports { get; set; }
        public virtual ICollection<Fichesante> Fichesantes { get; set; }
        public virtual ICollection<Fichier> Fichiers { get; set; }
        public virtual ICollection<RapportMateriel> RapportMateriels { get; set; }
        public virtual ICollection<RapportSecour> RapportSecours { get; set; }
        public virtual ICollection<RapportTrauma> RapportTraumas { get; set; }
        public virtual ICollection<RapportUtilisateur> RapportUtilisateurs { get; set; }
    }
}
