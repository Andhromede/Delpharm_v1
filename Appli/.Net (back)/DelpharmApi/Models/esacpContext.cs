using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DelpharmApi.Models
{
    public partial class esacpContext : DbContext
    {
        public esacpContext()
        {
        }

        public esacpContext(DbContextOptions<esacpContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Action> Actions { get; set; } = null!;
        public virtual DbSet<Contrat> Contrats { get; set; } = null!;
        public virtual DbSet<Cote> Cotes { get; set; } = null!;
        public virtual DbSet<Criticite> Criticites { get; set; } = null!;
        public virtual DbSet<Csp> Csps { get; set; } = null!;
        public virtual DbSet<Departement> Departements { get; set; } = null!;
        public virtual DbSet<Equipement> Equipements { get; set; } = null!;
        public virtual DbSet<EquipementRapport> EquipementRapports { get; set; } = null!;
        public virtual DbSet<Etat> Etats { get; set; } = null!;
        public virtual DbSet<Fichesante> Fichesantes { get; set; } = null!;
        public virtual DbSet<Fichier> Fichiers { get; set; } = null!;
        public virtual DbSet<Fonction> Fonctions { get; set; } = null!;
        public virtual DbSet<Materiel> Materiels { get; set; } = null!;
        public virtual DbSet<ModeInformation> ModeInformations { get; set; } = null!;
        public virtual DbSet<Poste> Postes { get; set; } = null!;
        public virtual DbSet<Priorite> Priorites { get; set; } = null!;
        public virtual DbSet<Rapport> Rapports { get; set; } = null!;
        public virtual DbSet<RapportMateriel> RapportMateriels { get; set; } = null!;
        public virtual DbSet<RapportSecour> RapportSecours { get; set; } = null!;
        public virtual DbSet<RapportTrauma> RapportTraumas { get; set; } = null!;
        public virtual DbSet<RapportUtilisateur> RapportUtilisateurs { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Secour> Secours { get; set; } = null!;
        public virtual DbSet<Service> Services { get; set; } = null!;
        public virtual DbSet<Siegelesion> Siegelesions { get; set; } = null!;
        public virtual DbSet<SousAction> SousActions { get; set; } = null!;
        public virtual DbSet<Traumatisme> Traumatismes { get; set; } = null!;
        public virtual DbSet<Type> Types { get; set; } = null!;
        public virtual DbSet<Typeat> Typeats { get; set; } = null!;
        public virtual DbSet<Utilisateur> Utilisateurs { get; set; } = null!;
        public virtual DbSet<UtilisateurAction> UtilisateurActions { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;user=root;database=esacp", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.21-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8_general_ci")
                .HasCharSet("utf8");

            modelBuilder.Entity<Action>(entity =>
            {
                entity.ToTable("action");

                entity.HasIndex(e => e.IdCriticite, "Id_criticite");

                entity.HasIndex(e => e.IdEtat, "Id_etat");

                entity.HasIndex(e => e.IdPriorite, "Id_priorite");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.Property(e => e.DateCreation)
                    .HasColumnType("datetime")
                    .HasColumnName("date_creation");

                entity.Property(e => e.Delai)
                    .HasColumnType("datetime")
                    .HasColumnName("delai");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasColumnName("description");

                entity.Property(e => e.IdCriticite).HasColumnName("Id_criticite");

                entity.Property(e => e.IdEtat).HasColumnName("Id_etat");

                entity.Property(e => e.IdPriorite).HasColumnName("Id_priorite");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsImmediate).HasColumnName("is_immediate");

                entity.Property(e => e.Reponse)
                    .HasColumnType("text")
                    .HasColumnName("reponse");

                entity.Property(e => e.Titre)
                    .HasMaxLength(255)
                    .HasColumnName("titre");

                entity.Property(e => e.ValidationHse)
                    .HasColumnType("datetime")
                    .HasColumnName("validation_hse");

                entity.Property(e => e.ValidationPilote)
                    .HasColumnType("datetime")
                    .HasColumnName("validation_pilote");

                entity.Property(e => e.ValidationPorteur)
                    .HasColumnType("datetime")
                    .HasColumnName("validation_porteur");

                entity.HasOne(d => d.IdCriticiteNavigation)
                    .WithMany(p => p.Actions)
                    .HasForeignKey(d => d.IdCriticite)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("action_ibfk_3");

                entity.HasOne(d => d.IdEtatNavigation)
                    .WithMany(p => p.Actions)
                    .HasForeignKey(d => d.IdEtat)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("action_ibfk_4");

                entity.HasOne(d => d.IdPrioriteNavigation)
                    .WithMany(p => p.Actions)
                    .HasForeignKey(d => d.IdPriorite)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("action_ibfk_2");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.Actions)
                    .HasForeignKey(d => d.IdRapport)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("action_ibfk_5");
            });

            modelBuilder.Entity<Contrat>(entity =>
            {
                entity.ToTable("contrat");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Cote>(entity =>
            {
                entity.ToTable("cote");

                entity.Property(e => e.Nom)
                    .HasMaxLength(50)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Criticite>(entity =>
            {
                entity.ToTable("criticite");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Csp>(entity =>
            {
                entity.ToTable("csp");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Departement>(entity =>
            {
                entity.ToTable("departement");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Equipement>(entity =>
            {
                entity.ToTable("equipement");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<EquipementRapport>(entity =>
            {
                entity.ToTable("equipement_rapport");

                entity.HasIndex(e => e.IdEquipement, "Id_equipement");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.Property(e => e.IdEquipement).HasColumnName("Id_equipement");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IsNecessaire).HasColumnName("is_necessaire");

                entity.Property(e => e.IsUtilise).HasColumnName("is_utilise");

                entity.HasOne(d => d.IdEquipementNavigation)
                    .WithMany(p => p.EquipementRapports)
                    .HasForeignKey(d => d.IdEquipement)
                    .HasConstraintName("equipement_rapport_ibfk_2");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.EquipementRapports)
                    .HasForeignKey(d => d.IdRapport)
                    .HasConstraintName("equipement_rapport_ibfk_1");
            });

            modelBuilder.Entity<Etat>(entity =>
            {
                entity.ToTable("etat");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Fichesante>(entity =>
            {
                entity.ToTable("fichesante");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.HasIndex(e => e.IdTypeAt, "Id_typeAT");

                entity.Property(e => e.DateCreation)
                    .HasColumnType("datetime")
                    .HasColumnName("date_creation");

                entity.Property(e => e.DateRevision)
                    .HasColumnType("datetime")
                    .HasColumnName("date_revision");

                entity.Property(e => e.DebutAt)
                    .HasColumnType("datetime")
                    .HasColumnName("debut_AT");

                entity.Property(e => e.DureeAt).HasColumnName("duree_AT");

                entity.Property(e => e.FinAt)
                    .HasColumnType("datetime")
                    .HasColumnName("fin_AT");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IdTypeAt).HasColumnName("Id_typeAT");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsSuivis).HasColumnName("is_suivis");

                entity.Property(e => e.MedecinTravail)
                    .HasMaxLength(50)
                    .HasColumnName("medecin_travail");

                entity.Property(e => e.PropositionMedecin)
                    .HasColumnType("text")
                    .HasColumnName("proposition_medecin");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.Fichesantes)
                    .HasForeignKey(d => d.IdRapport)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fichesante_ibfk_1");

                entity.HasOne(d => d.IdTypeAtNavigation)
                    .WithMany(p => p.Fichesantes)
                    .HasForeignKey(d => d.IdTypeAt)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fichesante_ibfk_2");
            });

            modelBuilder.Entity<Fichier>(entity =>
            {
                entity.ToTable("fichier");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.Property(e => e.Chemin)
                    .HasMaxLength(255)
                    .HasColumnName("chemin");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.Fichiers)
                    .HasForeignKey(d => d.IdRapport)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fichier_ibfk_1");
            });

            modelBuilder.Entity<Fonction>(entity =>
            {
                entity.ToTable("fonction");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Materiel>(entity =>
            {
                entity.ToTable("materiel");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<ModeInformation>(entity =>
            {
                entity.ToTable("mode_information");

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Poste>(entity =>
            {
                entity.ToTable("poste");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Priorite>(entity =>
            {
                entity.ToTable("priorite");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Rapport>(entity =>
            {
                entity.ToTable("rapport");

                entity.HasIndex(e => e.IdEtat, "Id_etat");

                entity.HasIndex(e => e.IdService, "Id_service");

                entity.HasIndex(e => e.IdType, "Id_type");

                entity.Property(e => e.ActionImmediate)
                    .HasColumnType("text")
                    .HasColumnName("action_immediate");

                entity.Property(e => e.Comment)
                    .HasColumnType("text")
                    .HasColumnName("comment");

                entity.Property(e => e.DateAccident)
                    .HasColumnType("datetime")
                    .HasColumnName("date_accident");

                entity.Property(e => e.DateRapport)
                    .HasColumnType("datetime")
                    .HasColumnName("date_rapport");

                entity.Property(e => e.DescriptionSituation)
                    .HasColumnType("text")
                    .HasColumnName("description_situation");

                entity.Property(e => e.IdEtat).HasColumnName("Id_etat");

                entity.Property(e => e.IdService).HasColumnName("Id_service");

                entity.Property(e => e.IdType).HasColumnName("Id_type");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsDu).HasColumnName("is_DU");

                entity.Property(e => e.IsRapportPolice).HasColumnName("is_rapport_police");

                entity.Property(e => e.IsRdp).HasColumnName("is_RDP");

                entity.Property(e => e.IsRetourPoste).HasColumnName("is_retour_poste");

                entity.Property(e => e.IsTravailLeger).HasColumnName("is_travail_leger");

                entity.Property(e => e.Lieu)
                    .HasMaxLength(255)
                    .HasColumnName("lieu");

                entity.Property(e => e.Materiel)
                    .HasColumnType("text")
                    .HasColumnName("materiel");

                entity.Property(e => e.MotifDeplacement)
                    .HasColumnType("text")
                    .HasColumnName("motif_deplacement");

                entity.Property(e => e.OccupationVictime)
                    .HasColumnType("text")
                    .HasColumnName("occupation_victime");

                entity.Property(e => e.Pourquoi)
                    .HasColumnType("text")
                    .HasColumnName("pourquoi");

                entity.HasOne(d => d.IdEtatNavigation)
                    .WithMany(p => p.Rapports)
                    .HasForeignKey(d => d.IdEtat)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_ibfk_1");

                entity.HasOne(d => d.IdServiceNavigation)
                    .WithMany(p => p.Rapports)
                    .HasForeignKey(d => d.IdService)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_ibfk_3");

                entity.HasOne(d => d.IdTypeNavigation)
                    .WithMany(p => p.Rapports)
                    .HasForeignKey(d => d.IdType)
                    .HasConstraintName("rapport_ibfk_2");
            });

            modelBuilder.Entity<RapportMateriel>(entity =>
            {
                entity.ToTable("rapport_materiel");

                entity.HasIndex(e => e.IdMateriel, "Id_materiel");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.Property(e => e.IdMateriel).HasColumnName("Id_materiel");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.ModeExploitation)
                    .HasMaxLength(255)
                    .HasColumnName("mode_exploitation");

                entity.HasOne(d => d.IdMaterielNavigation)
                    .WithMany(p => p.RapportMateriels)
                    .HasForeignKey(d => d.IdMateriel)
                    .HasConstraintName("rapport_materiel_ibfk_2");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.RapportMateriels)
                    .HasForeignKey(d => d.IdRapport)
                    .HasConstraintName("rapport_materiel_ibfk_1");
            });

            modelBuilder.Entity<RapportSecour>(entity =>
            {
                entity.ToTable("rapport_secours");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.HasIndex(e => e.IdSecours, "Id_secours");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IdSecours).HasColumnName("Id_secours");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.RapportSecours)
                    .HasForeignKey(d => d.IdRapport)
                    .HasConstraintName("rapport_secours_ibfk_1");

                entity.HasOne(d => d.IdSecoursNavigation)
                    .WithMany(p => p.RapportSecours)
                    .HasForeignKey(d => d.IdSecours)
                    .HasConstraintName("rapport_secours_ibfk_2");
            });

            modelBuilder.Entity<RapportTrauma>(entity =>
            {
                entity.ToTable("rapport_trauma");

                entity.HasIndex(e => e.IdCote, "Id_cote");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.HasIndex(e => e.IdSiegeLesion, "Id_siegeLesion");

                entity.HasIndex(e => e.IdTraumatisme, "Id_traumatisme");

                entity.Property(e => e.IdCote).HasColumnName("Id_cote");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IdSiegeLesion).HasColumnName("Id_siegeLesion");

                entity.Property(e => e.IdTraumatisme).HasColumnName("Id_traumatisme");

                entity.HasOne(d => d.IdCoteNavigation)
                    .WithMany(p => p.RapportTraumas)
                    .HasForeignKey(d => d.IdCote)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_trauma_ibfk_1");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.RapportTraumas)
                    .HasForeignKey(d => d.IdRapport)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_trauma_ibfk_4");

                entity.HasOne(d => d.IdSiegeLesionNavigation)
                    .WithMany(p => p.RapportTraumas)
                    .HasForeignKey(d => d.IdSiegeLesion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_trauma_ibfk_2");

                entity.HasOne(d => d.IdTraumatismeNavigation)
                    .WithMany(p => p.RapportTraumas)
                    .HasForeignKey(d => d.IdTraumatisme)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rapport_trauma_ibfk_3");
            });

            modelBuilder.Entity<RapportUtilisateur>(entity =>
            {
                entity.ToTable("rapport_utilisateur");

                entity.HasIndex(e => e.IdFonction, "Id_fonction");

                entity.HasIndex(e => e.IdModeInformation, "Id_mode_information");

                entity.HasIndex(e => e.IdRapport, "Id_rapport");

                entity.HasIndex(e => e.IdUtilisateur, "Id_utilisateur");

                entity.Property(e => e.Commentaire)
                    .HasColumnType("text")
                    .HasColumnName("commentaire");

                entity.Property(e => e.DateConnaissance)
                    .HasColumnType("datetime")
                    .HasColumnName("date_connaissance");

                entity.Property(e => e.DateValidation)
                    .HasColumnType("datetime")
                    .HasColumnName("date_validation");

                entity.Property(e => e.IdFonction).HasColumnName("Id_fonction");

                entity.Property(e => e.IdModeInformation).HasColumnName("Id_mode_information");

                entity.Property(e => e.IdRapport).HasColumnName("Id_rapport");

                entity.Property(e => e.IdUtilisateur).HasColumnName("Id_utilisateur");

                entity.Property(e => e.IsAnalyseAChaud).HasColumnName("is_analyse_a_chaud");

                entity.Property(e => e.IsInterne).HasColumnName("is_interne");

                entity.Property(e => e.IsIntervenu).HasColumnName("is_intervenu");

                entity.Property(e => e.IsNew).HasColumnName("is_new");

                entity.Property(e => e.IsTransporte).HasColumnName("is_transporte");

                entity.HasOne(d => d.IdFonctionNavigation)
                    .WithMany(p => p.RapportUtilisateurs)
                    .HasForeignKey(d => d.IdFonction)
                    .HasConstraintName("rapport_utilisateur_ibfk_3");

                entity.HasOne(d => d.IdModeInformationNavigation)
                    .WithMany(p => p.RapportUtilisateurs)
                    .HasForeignKey(d => d.IdModeInformation)
                    .HasConstraintName("rapport_utilisateur_ibfk_2");

                entity.HasOne(d => d.IdRapportNavigation)
                    .WithMany(p => p.RapportUtilisateurs)
                    .HasForeignKey(d => d.IdRapport)
                    .HasConstraintName("rapport_utilisateur_ibfk_4");

                entity.HasOne(d => d.IdUtilisateurNavigation)
                    .WithMany(p => p.RapportUtilisateurs)
                    .HasForeignKey(d => d.IdUtilisateur)
                    .HasConstraintName("rapport_utilisateur_ibfk_1");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Secour>(entity =>
            {
                entity.ToTable("secours");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsInterne).HasColumnName("is_interne");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.ToTable("service");

                entity.HasIndex(e => e.IdDepartement, "Id_departement");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IdDepartement).HasColumnName("Id_departement");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsInterne).HasColumnName("is_interne");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");

                entity.HasOne(d => d.IdDepartementNavigation)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.IdDepartement)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("service_ibfk_1");
            });

            modelBuilder.Entity<Siegelesion>(entity =>
            {
                entity.ToTable("siegelesion");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<SousAction>(entity =>
            {
                entity.ToTable("sous_action");

                entity.HasIndex(e => e.IdAction, "Id_action");

                entity.HasIndex(e => e.IdSousAction, "Id_sous_action");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.IdAction).HasColumnName("Id_action");

                entity.Property(e => e.IdSousAction).HasColumnName("Id_sous_action");

                entity.HasOne(d => d.IdActionNavigation)
                    .WithMany(p => p.SousActionIdActionNavigations)
                    .HasForeignKey(d => d.IdAction)
                    .HasConstraintName("sous_action_ibfk_1");

                entity.HasOne(d => d.IdSousActionNavigation)
                    .WithMany(p => p.SousActionIdSousActionNavigations)
                    .HasForeignKey(d => d.IdSousAction)
                    .HasConstraintName("sous_action_ibfk_2");
            });

            modelBuilder.Entity<Traumatisme>(entity =>
            {
                entity.ToTable("traumatisme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Type>(entity =>
            {
                entity.ToTable("type");

                entity.Property(e => e.Acronyme)
                    .HasMaxLength(50)
                    .HasColumnName("acronyme");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Typeat>(entity =>
            {
                entity.ToTable("typeat");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<Utilisateur>(entity =>
            {
                entity.ToTable("utilisateur");

                entity.HasIndex(e => e.IdContrat, "Id_contrat");

                entity.HasIndex(e => e.IdCsp, "Id_csp");

                entity.HasIndex(e => e.IdPoste, "Id_poste");

                entity.HasIndex(e => e.IdRole, "Id_role");

                entity.HasIndex(e => e.IdService, "Id_service");

                entity.Property(e => e.DateNaissance)
                    .HasColumnType("datetime")
                    .HasColumnName("date_naissance");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.IdContrat).HasColumnName("Id_contrat");

                entity.Property(e => e.IdCsp).HasColumnName("Id_csp");

                entity.Property(e => e.IdPoste).HasColumnName("Id_poste");

                entity.Property(e => e.IdRole)
                    .HasColumnName("Id_role")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.IdService).HasColumnName("Id_service");

                entity.Property(e => e.IsActif)
                    .IsRequired()
                    .HasColumnName("is_actif")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.IsChef).HasColumnName("is_chef");

                entity.Property(e => e.IsDeleted).HasColumnName("is_deleted");

                entity.Property(e => e.IsUap).HasColumnName("is_UAP");

                entity.Property(e => e.Matricule)
                    .HasMaxLength(255)
                    .HasColumnName("matricule");

                entity.Property(e => e.Nom)
                    .HasMaxLength(255)
                    .HasColumnName("nom");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Prenom)
                    .HasMaxLength(255)
                    .HasColumnName("prenom");

                entity.Property(e => e.Sexe)
                    .HasMaxLength(50)
                    .HasColumnName("sexe");

                entity.Property(e => e.Telephone)
                    .HasMaxLength(15)
                    .HasColumnName("telephone");

                entity.HasOne(d => d.IdContratNavigation)
                    .WithMany(p => p.Utilisateurs)
                    .HasForeignKey(d => d.IdContrat)
                    .HasConstraintName("utilisateur_ibfk_2");

                entity.HasOne(d => d.IdCspNavigation)
                    .WithMany(p => p.Utilisateurs)
                    .HasForeignKey(d => d.IdCsp)
                    .HasConstraintName("utilisateur_ibfk_3");

                entity.HasOne(d => d.IdPosteNavigation)
                    .WithMany(p => p.Utilisateurs)
                    .HasForeignKey(d => d.IdPoste)
                    .HasConstraintName("utilisateur_ibfk_4");

                entity.HasOne(d => d.IdRoleNavigation)
                    .WithMany(p => p.Utilisateurs)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("utilisateur_ibfk_5");

                entity.HasOne(d => d.IdServiceNavigation)
                    .WithMany(p => p.Utilisateurs)
                    .HasForeignKey(d => d.IdService)
                    .HasConstraintName("utilisateur_ibfk_1");
            });

            modelBuilder.Entity<UtilisateurAction>(entity =>
            {
                entity.ToTable("utilisateur_action");

                entity.HasIndex(e => e.IdAction, "Id_action");

                entity.HasIndex(e => e.IdFonction, "Id_fonction");

                entity.HasIndex(e => e.IdUtilisateur, "Id_utilisateur");

                entity.Property(e => e.Commentaire)
                    .HasColumnType("text")
                    .HasColumnName("commentaire");

                entity.Property(e => e.IdAction).HasColumnName("Id_action");

                entity.Property(e => e.IdFonction).HasColumnName("Id_fonction");

                entity.Property(e => e.IdUtilisateur).HasColumnName("Id_utilisateur");

                entity.Property(e => e.IsNew).HasColumnName("is_new");

                entity.HasOne(d => d.IdActionNavigation)
                    .WithMany(p => p.UtilisateurActions)
                    .HasForeignKey(d => d.IdAction)
                    .HasConstraintName("utilisateur_action_ibfk_3");

                entity.HasOne(d => d.IdFonctionNavigation)
                    .WithMany(p => p.UtilisateurActions)
                    .HasForeignKey(d => d.IdFonction)
                    .HasConstraintName("utilisateur_action_ibfk_2");

                entity.HasOne(d => d.IdUtilisateurNavigation)
                    .WithMany(p => p.UtilisateurActions)
                    .HasForeignKey(d => d.IdUtilisateur)
                    .HasConstraintName("utilisateur_action_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
