namespace DelpharmApi.Helpers
{
    public class DtoRecordsHelpers
    {
        public record UtilisateurDto(
            int? Id = null,
            string? Matricule = null,
            string? Sexe = null,
            string? Nom = null,
            string? Prenom = null,
            string? Email = null,
            string? Password = null, 
            string? Telephone = null,
            DateTime? DateNaissance = null,
            bool? IsUap = null,
            bool? IsChef = null,
            int? IdService = null,
            int? IdContrat = null,
            int? IdCsp = null,
            int? IdPoste = null,
            int? IdRole = null
        );

    }
}
