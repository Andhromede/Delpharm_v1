-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 06 juil. 2022 à 09:13
-- Version du serveur :  8.0.21
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `esacp`
--

-- --------------------------------------------------------

--
-- Structure de la table `action`
--

DROP TABLE IF EXISTS `action`;
CREATE TABLE IF NOT EXISTS `action` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `date_creation` datetime DEFAULT NULL,
  `description` text,
  `reponse` text,
  `validation_hse` datetime DEFAULT NULL,
  `validation_pilote` datetime DEFAULT NULL,
  `validation_porteur` datetime DEFAULT NULL,
  `delai` datetime DEFAULT NULL,
  `is_immediate` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `Id_priorite` int NOT NULL,
  `Id_criticite` int NOT NULL,
  `Id_etat` int NOT NULL,
  `Id_rapport` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_priorite` (`Id_priorite`),
  KEY `Id_criticite` (`Id_criticite`),
  KEY `Id_etat` (`Id_etat`),
  KEY `Id_rapport` (`Id_rapport`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `contrat`
--

DROP TABLE IF EXISTS `contrat`;
CREATE TABLE IF NOT EXISTS `contrat` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `contrat`
--

INSERT INTO `contrat` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'CDI', 0),
(2, 'CDD', 0),
(3, 'Intérim', 0),
(4, 'Contrat d\'Apprentissage', 0),
(6, 'Contrat de Professionnalisation', 0),
(7, 'Autre', 0),
(8, 'Employé Exterieur', 0);

-- --------------------------------------------------------

--
-- Structure de la table `cote`
--

DROP TABLE IF EXISTS `cote`;
CREATE TABLE IF NOT EXISTS `cote` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cote`
--

INSERT INTO `cote` (`Id`, `nom`) VALUES
(1, 'Droite'),
(2, 'Gauche'),
(3, 'Avant'),
(4, 'Arrière');

-- --------------------------------------------------------

--
-- Structure de la table `criticite`
--

DROP TABLE IF EXISTS `criticite`;
CREATE TABLE IF NOT EXISTS `criticite` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `criticite`
--

INSERT INTO `criticite` (`Id`, `nom`, `acronyme`, `is_deleted`) VALUES
(1, 'Non Conformité Majeure', 'NCM', 0),
(2, 'Non Conformité Mineure', 'NCm', 0),
(3, 'Point Sensible', 'PS', 0),
(4, 'Point Perfectible', 'PP', 0),
(5, 'Haut Potentiel de Gravité', 'HPG', 0),
(6, 'Enseignement Important', 'TOH', 0);

-- --------------------------------------------------------

--
-- Structure de la table `csp`
--

DROP TABLE IF EXISTS `csp`;
CREATE TABLE IF NOT EXISTS `csp` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `csp`
--

INSERT INTO `csp` (`Id`, `nom`, `acronyme`, `is_deleted`) VALUES
(1, 'T', 'T', 0),
(2, 'Alternants', 'Alt', 0),
(3, 'Agent de Maîtrise', 'AM', 0),
(4, 'OE', 'OE', 0),
(5, 'C', 'C', 0),
(6, 'Entreprise Extérieure', 'EE', 0);

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`Id`, `nom`, `acronyme`, `is_deleted`) VALUES
(1, 'Production', 'Prod', 0),
(2, 'Direction Industrielle et Service Technique', 'DI & ST', 0),
(3, 'Contrôle qualité', 'CQ', 0),
(4, 'Assurance Qualité', 'AQ', 0),
(5, 'Direction des Affaires Financières', 'DAF', 0),
(6, 'Ressources Humaines', 'RH', 0),
(8, 'Informatique', 'IT', 0),
(9, 'Supply Chain', 'SC', 0);

-- --------------------------------------------------------

--
-- Structure de la table `equipement`
--

DROP TABLE IF EXISTS `equipement`;
CREATE TABLE IF NOT EXISTS `equipement` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipement`
--

INSERT INTO `equipement` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Casque de sécurité', 0),
(2, 'Gants anti brûlure', 0),
(3, 'Gants anti coupure', 0),
(4, 'Gants chirugicaux', 0),
(5, 'Gants (autre)', 0),
(6, 'Lunettes de protection', 0),
(7, 'Lunettes teintées', 0),
(8, 'Lunettes (autre)', 0),
(9, 'Chaussures de sécurité', 0),
(10, 'Combinaison de protection', 0),
(11, 'Gilet jaune', 0),
(12, 'Masque réspiratoire', 0),
(13, 'Masque chirurgical', 0),
(14, 'Masque (autre)', 0),
(15, 'Ceinture dorsale', 0),
(16, 'Casque anti-bruit', 0),
(17, 'Bouchon d\'oreille', 0),
(18, 'Autre', 0);

-- --------------------------------------------------------

--
-- Structure de la table `equipement_rapport`
--

DROP TABLE IF EXISTS `equipement_rapport`;
CREATE TABLE IF NOT EXISTS `equipement_rapport` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_rapport` int DEFAULT NULL,
  `Id_equipement` int DEFAULT NULL,
  `is_necessaire` tinyint(1) DEFAULT NULL,
  `is_utilise` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_rapport` (`Id_rapport`),
  KEY `Id_equipement` (`Id_equipement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

DROP TABLE IF EXISTS `etat`;
CREATE TABLE IF NOT EXISTS `etat` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `etat`
--

INSERT INTO `etat` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Brouillon', 0),
(2, 'En attente de validation', 0),
(3, 'Validé', 0),
(4, 'Refusé', 0),
(5, 'Clos', 0),
(6, 'Réalisé', 0),
(7, 'Modifié', 0),
(8, 'En attente de modification', 0);

-- --------------------------------------------------------

--
-- Structure de la table `fichesante`
--

DROP TABLE IF EXISTS `fichesante`;
CREATE TABLE IF NOT EXISTS `fichesante` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `date_creation` datetime DEFAULT NULL,
  `debut_AT` datetime DEFAULT NULL,
  `fin_AT` datetime DEFAULT NULL,
  `duree_AT` int DEFAULT NULL,
  `date_revision` datetime DEFAULT NULL,
  `medecin_travail` varchar(50) DEFAULT NULL,
  `proposition_medecin` text,
  `is_suivis` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `Id_rapport` int NOT NULL,
  `Id_typeAT` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_rapport` (`Id_rapport`),
  KEY `Id_typeAT` (`Id_typeAT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `fichier`
--

DROP TABLE IF EXISTS `fichier`;
CREATE TABLE IF NOT EXISTS `fichier` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `chemin` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `Id_rapport` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_rapport` (`Id_rapport`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `fonction`
--

DROP TABLE IF EXISTS `fonction`;
CREATE TABLE IF NOT EXISTS `fonction` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fonction`
--

INSERT INTO `fonction` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Porteur', 0),
(2, 'Validateur', 0),
(3, 'Rédacteur', 0),
(4, 'Témoin', 0),
(5, 'Victime', 0),
(6, 'Tier responsable', 0),
(7, 'Secouriste', 0),
(8, 'Infirmier(e)', 0),
(9, 'HSE', 0),
(10, 'Médecin', 0),
(11, 'Policier / Gendarme', 0),
(12, 'Agent de sécurité', 0),
(13, 'Pilote', 0),
(14, 'Autre', 0);

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
CREATE TABLE IF NOT EXISTS `materiel` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `mode_information`
--

DROP TABLE IF EXISTS `mode_information`;
CREATE TABLE IF NOT EXISTS `mode_information` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mode_information`
--

INSERT INTO `mode_information` (`Id`, `nom`, `deleted`) VALUES
(1, 'Oral', 0),
(2, 'Téléphone', 0),
(3, 'Mail', 0),
(4, 'Main courante', 0),
(5, 'Courrier', 0),
(6, 'Par un témoin', 0);

-- --------------------------------------------------------

--
-- Structure de la table `poste`
--

DROP TABLE IF EXISTS `poste`;
CREATE TABLE IF NOT EXISTS `poste` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `poste`
--

INSERT INTO `poste` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Directeur', 0),
(2, 'Secrétaire', 0),
(3, 'Comptable', 0),
(4, 'Informaticien', 0),
(5, 'Agent de maintenance', 0),
(6, 'Chercheur', 0),
(7, 'Controleur', 0),
(8, 'Médecin', 0),
(9, 'Infirmier(e)', 0),
(10, 'Agent de sécurité', 0),
(11, 'Secouriste', 0),
(12, 'Standardiste', 0),
(13, 'Chimiste', 0),
(14, 'Technicien', 0),
(15, 'Agent administratif', 0),
(16, 'Réparateur', 0),
(17, 'Auditeur', 0),
(18, 'Commissaire aux comptes', 0),
(19, 'Responsable aux recrutement ', 0),
(20, 'Administrateur des ventes', 0),
(21, 'Commercial', 0),
(22, 'Chargé de communication', 0),
(23, 'Technicien réseau', 0),
(24, 'Directeur adjoint', 0),
(25, 'Assistant de direction', 0),
(26, 'Négociateur', 0),
(27, 'Agent d\'entretien', 0),
(28, 'Formateur', 0),
(29, 'Manager', 0),
(30, 'Controleur de gestion', 0),
(31, 'Psychologue', 0),
(32, 'Juriste', 0),
(33, 'Assistant de gestion', 0),
(34, 'Qualiticien', 0),
(35, 'Gestionnaire', 0),
(36, 'Opérateur de production', 0),
(37, 'Expert comptable', 0),
(38, 'Cadre', 0);

-- --------------------------------------------------------

--
-- Structure de la table `priorite`
--

DROP TABLE IF EXISTS `priorite`;
CREATE TABLE IF NOT EXISTS `priorite` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `priorite`
--

INSERT INTO `priorite` (`Id`, `nom`, `acronyme`, `is_deleted`) VALUES
(1, 'Priorité 1', 'P1', 0),
(2, 'Priorité 2', 'P2', 0),
(3, 'Priorité 3', 'P3', 0);

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `date_accident` datetime DEFAULT NULL,
  `date_rapport` datetime DEFAULT NULL,
  `motif_deplacement` text,
  `description_situation` text,
  `action_immediate` text,
  `occupation_victime` text,
  `comment` text,
  `pourquoi` text,
  `lieu` varchar(255) DEFAULT NULL,
  `materiel` text,
  `is_retour_poste` tinyint(1) DEFAULT NULL,
  `is_travail_leger` tinyint(1) DEFAULT NULL,
  `is_DU` tinyint(1) DEFAULT NULL,
  `is_RDP` tinyint(1) DEFAULT NULL,
  `is_rapport_police` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `Id_etat` int NOT NULL,
  `Id_type` int DEFAULT NULL,
  `Id_service` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_etat` (`Id_etat`),
  KEY `Id_type` (`Id_type`),
  KEY `Id_service` (`Id_service`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`Id`, `date_accident`, `date_rapport`, `motif_deplacement`, `description_situation`, `action_immediate`, `occupation_victime`, `comment`, `pourquoi`, `lieu`, `materiel`, `is_retour_poste`, `is_travail_leger`, `is_DU`, `is_RDP`, `is_rapport_police`, `is_deleted`, `Id_etat`, `Id_type`, `Id_service`) VALUES
(1, '2022-02-05 00:00:00', '2022-03-05 00:00:00', 'motif commercial', 'descriptif de la situation', '0', 'occupation de la victime', 'voila comment est-ce arrivé', 'pourquoi cela est arrivé', 'lieu de l\'accident', 'materiel en cause', 1, 1, 1, 0, 0, 0, 1, 1, 5),
(2, '2022-05-10 00:00:00', '2022-05-11 00:00:00', 'motif commercial 2', 'descriptif de la situation 2', '0', 'occupation de la victime 2', 'voila comment est-ce arrivé 2', 'pourquoi cela est arrivé 2', 'lieu de l\'accident 2', 'materiel en cause 2', 1, 1, 0, 1, 0, 0, 2, 3, 4),
(3, '2022-10-01 00:00:00', '2022-10-02 00:00:00', 'motif commercial 3', 'descriptif de la situation 3', '0', 'occupation de la victime 3', 'voila comment est-ce arrivé 3', 'pourquoi cela est arrivé 3', 'lieu de l\'accident 3', 'materiel en cause 3', 1, 1, 0, 1, 0, 0, 4, 1, 6);

-- --------------------------------------------------------

--
-- Structure de la table `rapport_materiel`
--

DROP TABLE IF EXISTS `rapport_materiel`;
CREATE TABLE IF NOT EXISTS `rapport_materiel` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_rapport` int DEFAULT NULL,
  `Id_materiel` int DEFAULT NULL,
  `mode_exploitation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_rapport` (`Id_rapport`),
  KEY `Id_materiel` (`Id_materiel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `rapport_secours`
--

DROP TABLE IF EXISTS `rapport_secours`;
CREATE TABLE IF NOT EXISTS `rapport_secours` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_rapport` int DEFAULT NULL,
  `Id_secours` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_rapport` (`Id_rapport`),
  KEY `Id_secours` (`Id_secours`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `rapport_trauma`
--

DROP TABLE IF EXISTS `rapport_trauma`;
CREATE TABLE IF NOT EXISTS `rapport_trauma` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_cote` int NOT NULL,
  `Id_siegeLesion` int NOT NULL,
  `Id_traumatisme` int NOT NULL,
  `Id_rapport` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_cote` (`Id_cote`),
  KEY `Id_siegeLesion` (`Id_siegeLesion`),
  KEY `Id_traumatisme` (`Id_traumatisme`),
  KEY `Id_rapport` (`Id_rapport`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `rapport_utilisateur`
--

DROP TABLE IF EXISTS `rapport_utilisateur`;
CREATE TABLE IF NOT EXISTS `rapport_utilisateur` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_utilisateur` int DEFAULT NULL,
  `Id_mode_information` int DEFAULT NULL,
  `Id_fonction` int DEFAULT NULL,
  `Id_rapport` int DEFAULT NULL,
  `commentaire` text,
  `is_analyse_a_chaud` tinyint(1) DEFAULT NULL,
  `date_validation` datetime DEFAULT NULL,
  `is_intervenu` tinyint(1) DEFAULT NULL,
  `date_connaissance` datetime DEFAULT NULL,
  `is_transporte` tinyint(1) DEFAULT NULL,
  `is_interne` tinyint(1) DEFAULT NULL,
  `is_new` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_utilisateur` (`Id_utilisateur`),
  KEY `Id_mode_information` (`Id_mode_information`),
  KEY `Id_fonction` (`Id_fonction`),
  KEY `Id_rapport` (`Id_rapport`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Salarié', 0),
(2, 'Rédacteur', 0),
(3, 'Pilote', 0),
(4, 'Porteur', 0),
(5, 'Validateur', 0);

-- --------------------------------------------------------

--
-- Structure de la table `secours`
--

DROP TABLE IF EXISTS `secours`;
CREATE TABLE IF NOT EXISTS `secours` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_interne` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `secours`
--

INSERT INTO `secours` (`Id`, `nom`, `is_interne`, `is_deleted`) VALUES
(1, 'Pompier', 0, 0),
(2, 'Police', 0, 0),
(3, 'SAMU', 0, 0),
(4, 'Ambulance', 0, 0),
(5, 'SOS Médecin', 0, 0),
(6, '8300', 1, 0),
(7, 'Infirmier(e)', 1, 0),
(8, 'Médecin', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

DROP TABLE IF EXISTS `service`;
CREATE TABLE IF NOT EXISTS `service` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_interne` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `Id_departement` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_departement` (`Id_departement`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`Id`, `nom`, `acronyme`, `is_interne`, `is_deleted`, `Id_departement`) VALUES
(1, 'Unité Autonome de Production', 'UAP Base / CdP', 1, 0, 1),
(2, 'Unité Autonome de Production Hautement Actif/Oncologie', 'UAP HA / O', 1, 0, 1),
(3, 'Unité Autonome de Production Hormones Sexuelles', 'UAP HS', 1, 0, 1),
(4, 'Maintenance Production', 'MP', 1, 0, 1),
(5, 'Maintenance Général', 'MG', 1, 0, 2),
(6, 'Support DI & ST', 'DI & ST', 1, 0, 2),
(7, 'Labo CQ', 'LCQ', 1, 0, 3),
(8, 'Support CQ', 'SCQ', 1, 0, 3),
(9, 'Magasin SC', 'MSC', 1, 0, 9),
(10, 'Support SC', 'SSC', 1, 0, 9),
(11, 'Support AQ', 'SAQ', 1, 0, 4),
(12, 'Support DAF', 'SDAF', 1, 0, 5),
(13, 'Support RH', 'SRH', 1, 0, 6),
(14, 'Support IT', 'SIT', 1, 0, 8),
(16, 'Hygiène Sécurité Environnement', 'HSE', 1, 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `siegelesion`
--

DROP TABLE IF EXISTS `siegelesion`;
CREATE TABLE IF NOT EXISTS `siegelesion` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `siegelesion`
--

INSERT INTO `siegelesion` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Cuir chevelu, crâne', 0),
(2, 'Oreille', 0),
(3, 'Oeil', 0),
(4, 'Mâchoire / dents', 0),
(5, 'Tête (autre)', 0),
(6, 'Rachis / vertèbres cervicales', 0),
(7, 'Cou (autre)', 0),
(8, 'Colonne vertébrale / vertèbres', 0),
(9, 'Dos (autre)', 0),
(10, 'Tronc (organes internes)', 0),
(11, 'Cage thoracique', 0),
(12, 'Epaule / clavicule / omoplate', 0),
(13, 'Tronc supérieur (autre)', 0),
(14, 'Bassin / hanches', 0),
(15, 'Région abdominale / organes génitaux', 0),
(16, 'Tronc inférieur (autre)', 0),
(17, 'Pouce', 0),
(18, 'Doigts (autres)', 0),
(19, 'Main', 0),
(20, 'Poignet', 0),
(21, 'Bras / coude', 0),
(22, 'Jambe / Genoux', 0),
(23, 'Cheville', 0),
(24, 'Pied', 0),
(25, 'Orteils', 0),
(26, 'Membre infèrieur (autre)', 0),
(27, 'Autre', 0);

-- --------------------------------------------------------

--
-- Structure de la table `sous_action`
--

DROP TABLE IF EXISTS `sous_action`;
CREATE TABLE IF NOT EXISTS `sous_action` (
  `Id` int NOT NULL,
  `Id_action` int DEFAULT NULL,
  `Id_sous_action` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_action` (`Id_action`),
  KEY `Id_sous_action` (`Id_sous_action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `traumatisme`
--

DROP TABLE IF EXISTS `traumatisme`;
CREATE TABLE IF NOT EXISTS `traumatisme` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `traumatisme`
--

INSERT INTO `traumatisme` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'Choc / coup', 0),
(2, 'Douleur', 0),
(3, 'Fracture', 0),
(4, 'Luxation', 0),
(5, 'Ecrasement', 0),
(6, 'Déchirure', 0),
(7, 'Coupure', 0),
(8, 'Perforation', 0),
(9, 'Amputation', 0),
(10, 'Brûlure', 0),
(11, 'Irritation', 0),
(12, 'Empoisonnement', 0),
(13, 'Intoxication', 0);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `acronyme` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`Id`, `nom`, `acronyme`, `is_deleted`) VALUES
(1, 'Audit Interne', 'AUI', 0),
(2, 'Audit Externe', 'AUE', 0),
(3, 'Assureur', 'ASS', 0),
(4, 'Dreal', 'Dreal', 0),
(5, 'Accident de Travail', 'AT', 0),
(6, 'Presque Accident / Situation Dangereuse', 'PQA/SD', 0),
(7, 'Cellule de Crise', 'CC', 0),
(8, 'Comité de Pilotage de Sécurité', 'CPS', 0),
(9, 'Revue de Direction', 'RDIR', 0),
(10, 'Autre', 'AUTR', 0),
(11, 'Control Interne', 'CI', 0),
(12, 'Control Externe', 'CE', 0);

-- --------------------------------------------------------

--
-- Structure de la table `typeat`
--

DROP TABLE IF EXISTS `typeat`;
CREATE TABLE IF NOT EXISTS `typeat` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typeat`
--

INSERT INTO `typeat` (`Id`, `nom`, `is_deleted`) VALUES
(1, 'ATAA', 0),
(2, 'ATSA', 0),
(3, 'ATB', 0),
(4, 'PQA', 0);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `matricule` varchar(255) NOT NULL,
  `sexe` varchar(50) DEFAULT NULL,
  `nom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `prenom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `is_actif` tinyint(1) NOT NULL DEFAULT '1',
  `is_UAP` tinyint(1) DEFAULT NULL,
  `is_chef` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `Id_service` int DEFAULT NULL,
  `Id_contrat` int DEFAULT NULL,
  `Id_csp` int DEFAULT NULL,
  `Id_poste` int DEFAULT NULL,
  `Id_role` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`Id`),
  KEY `Id_service` (`Id_service`),
  KEY `Id_contrat` (`Id_contrat`),
  KEY `Id_csp` (`Id_csp`),
  KEY `Id_poste` (`Id_poste`),
  KEY `Id_role` (`Id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Id`, `matricule`, `sexe`, `nom`, `prenom`, `email`, `password`, `telephone`, `date_naissance`, `is_actif`, `is_UAP`, `is_chef`, `is_deleted`, `Id_service`, `Id_contrat`, `Id_csp`, `Id_poste`, `Id_role`) VALUES
(1, 'V8695G-26', 'Homme', 'Cren', 'Bruno', 'bruno.cren@delpharm.com', '1234', '0664805541', '1975-01-15 00:00:00', 1, 0, 1, 0, 16, 1, NULL, 15, 5),
(2, 'F6492S-43', 'Homme', 'Dujardin', 'Jean', 'jean.dujardin@delpharm.com', '1234', '0684629731', '1985-06-25 00:00:00', 1, 1, 0, 0, 1, 1, NULL, 14, 4),
(3, 'F6492S-43', 'Femme', 'Lartigau', 'Oriane', 'oriane.lartigau@delpharm.com', '1234', '0661359862', '1980-12-25 00:00:00', 1, 1, 1, 0, 1, 1, NULL, 38, 3),
(4, 'F6492S-43', 'Homme', 'Derache', 'Hervé', 'herve.derache@delpharm.com', '1234', '0665894238', '1973-05-02 00:00:00', 1, 0, 1, 0, 9, 1, NULL, 38, 2),
(17, '0512-d595', 'Homme', 'Desmoulin', 'Camille', 'c.desmoulin@gmail.com', '1234', 'string', '1980-06-15 09:38:49', 1, 0, 0, 0, 2, 1, 1, 2, 1),
(27, '1234567', 'Femme', 'Camille', 'Delacroix', 'c.delacroix@gmail.com', 'Th7t96S7jBl7pdRcgRipyfIkq+EBo976Q0NtPj0eyK4=$01Haxnt/U3YpYEaJlPzkV0LpEo1Ldq9K0AimbB7D5l4=', '0625639862', '1980-07-11 11:26:06', 1, NULL, NULL, 0, 1, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur_action`
--

DROP TABLE IF EXISTS `utilisateur_action`;
CREATE TABLE IF NOT EXISTS `utilisateur_action` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_utilisateur` int DEFAULT NULL,
  `Id_fonction` int DEFAULT NULL,
  `Id_action` int DEFAULT NULL,
  `commentaire` text,
  `is_new` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_utilisateur` (`Id_utilisateur`),
  KEY `Id_fonction` (`Id_fonction`),
  KEY `Id_action` (`Id_action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `action`
--
ALTER TABLE `action`
  ADD CONSTRAINT `action_ibfk_2` FOREIGN KEY (`Id_priorite`) REFERENCES `priorite` (`Id`),
  ADD CONSTRAINT `action_ibfk_3` FOREIGN KEY (`Id_criticite`) REFERENCES `criticite` (`Id`),
  ADD CONSTRAINT `action_ibfk_4` FOREIGN KEY (`Id_etat`) REFERENCES `etat` (`Id`),
  ADD CONSTRAINT `action_ibfk_5` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`);

--
-- Contraintes pour la table `equipement_rapport`
--
ALTER TABLE `equipement_rapport`
  ADD CONSTRAINT `equipement_rapport_ibfk_1` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`),
  ADD CONSTRAINT `equipement_rapport_ibfk_2` FOREIGN KEY (`Id_equipement`) REFERENCES `equipement` (`Id`);

--
-- Contraintes pour la table `fichesante`
--
ALTER TABLE `fichesante`
  ADD CONSTRAINT `fichesante_ibfk_1` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`),
  ADD CONSTRAINT `fichesante_ibfk_2` FOREIGN KEY (`Id_typeAT`) REFERENCES `typeat` (`Id`);

--
-- Contraintes pour la table `fichier`
--
ALTER TABLE `fichier`
  ADD CONSTRAINT `fichier_ibfk_1` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`);

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `rapport_ibfk_1` FOREIGN KEY (`Id_etat`) REFERENCES `etat` (`Id`),
  ADD CONSTRAINT `rapport_ibfk_2` FOREIGN KEY (`Id_type`) REFERENCES `type` (`Id`),
  ADD CONSTRAINT `rapport_ibfk_3` FOREIGN KEY (`Id_service`) REFERENCES `service` (`Id`);

--
-- Contraintes pour la table `rapport_materiel`
--
ALTER TABLE `rapport_materiel`
  ADD CONSTRAINT `rapport_materiel_ibfk_1` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`),
  ADD CONSTRAINT `rapport_materiel_ibfk_2` FOREIGN KEY (`Id_materiel`) REFERENCES `materiel` (`Id`);

--
-- Contraintes pour la table `rapport_secours`
--
ALTER TABLE `rapport_secours`
  ADD CONSTRAINT `rapport_secours_ibfk_1` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`),
  ADD CONSTRAINT `rapport_secours_ibfk_2` FOREIGN KEY (`Id_secours`) REFERENCES `secours` (`Id`);

--
-- Contraintes pour la table `rapport_trauma`
--
ALTER TABLE `rapport_trauma`
  ADD CONSTRAINT `rapport_trauma_ibfk_1` FOREIGN KEY (`Id_cote`) REFERENCES `cote` (`Id`),
  ADD CONSTRAINT `rapport_trauma_ibfk_2` FOREIGN KEY (`Id_siegeLesion`) REFERENCES `siegelesion` (`Id`),
  ADD CONSTRAINT `rapport_trauma_ibfk_3` FOREIGN KEY (`Id_traumatisme`) REFERENCES `traumatisme` (`Id`),
  ADD CONSTRAINT `rapport_trauma_ibfk_4` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`);

--
-- Contraintes pour la table `rapport_utilisateur`
--
ALTER TABLE `rapport_utilisateur`
  ADD CONSTRAINT `rapport_utilisateur_ibfk_1` FOREIGN KEY (`Id_utilisateur`) REFERENCES `utilisateur` (`Id`),
  ADD CONSTRAINT `rapport_utilisateur_ibfk_2` FOREIGN KEY (`Id_mode_information`) REFERENCES `mode_information` (`Id`),
  ADD CONSTRAINT `rapport_utilisateur_ibfk_3` FOREIGN KEY (`Id_fonction`) REFERENCES `fonction` (`Id`),
  ADD CONSTRAINT `rapport_utilisateur_ibfk_4` FOREIGN KEY (`Id_rapport`) REFERENCES `rapport` (`Id`);

--
-- Contraintes pour la table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`Id_departement`) REFERENCES `departement` (`Id`);

--
-- Contraintes pour la table `sous_action`
--
ALTER TABLE `sous_action`
  ADD CONSTRAINT `sous_action_ibfk_1` FOREIGN KEY (`Id_action`) REFERENCES `action` (`Id`),
  ADD CONSTRAINT `sous_action_ibfk_2` FOREIGN KEY (`Id_sous_action`) REFERENCES `action` (`Id`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`Id_service`) REFERENCES `service` (`Id`),
  ADD CONSTRAINT `utilisateur_ibfk_2` FOREIGN KEY (`Id_contrat`) REFERENCES `contrat` (`Id`),
  ADD CONSTRAINT `utilisateur_ibfk_3` FOREIGN KEY (`Id_csp`) REFERENCES `csp` (`Id`),
  ADD CONSTRAINT `utilisateur_ibfk_4` FOREIGN KEY (`Id_poste`) REFERENCES `poste` (`Id`),
  ADD CONSTRAINT `utilisateur_ibfk_5` FOREIGN KEY (`Id_role`) REFERENCES `role` (`Id`);

--
-- Contraintes pour la table `utilisateur_action`
--
ALTER TABLE `utilisateur_action`
  ADD CONSTRAINT `utilisateur_action_ibfk_1` FOREIGN KEY (`Id_utilisateur`) REFERENCES `utilisateur` (`Id`),
  ADD CONSTRAINT `utilisateur_action_ibfk_2` FOREIGN KEY (`Id_fonction`) REFERENCES `fonction` (`Id`),
  ADD CONSTRAINT `utilisateur_action_ibfk_3` FOREIGN KEY (`Id_action`) REFERENCES `action` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
