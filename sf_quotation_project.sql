-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 09 avr. 2019 à 08:29
-- Version du serveur :  8.0.15
-- Version de PHP :  7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sf_quotation_project`
--

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`) VALUES
('20190408194109'),
('20190408194837');

-- --------------------------------------------------------

--
-- Structure de la table `quotation`
--

CREATE TABLE `quotation` (
  `id` int(11) NOT NULL,
  `servicetype` int(11) DEFAULT NULL,
  `cleaningtype` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `propertyaddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `propertysize` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bedrooms` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bathrooms` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bathtubs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sittingroom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diningroom` tinyint(1) DEFAULT NULL,
  `kitchen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `oven` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `frequencycleaning` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferredtime` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferreddate` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requirementdetails` longtext COLLATE utf8mb4_unicode_ci,
  `additionalinfo` longtext COLLATE utf8mb4_unicode_ci,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferedcontact` tinyint(1) DEFAULT NULL,
  `userfile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `quotation`
--

INSERT INTO `quotation` (`id`, `servicetype`, `cleaningtype`, `propertyaddress`, `propertysize`, `bedrooms`, `bathrooms`, `bathtubs`, `sittingroom`, `diningroom`, `kitchen`, `oven`, `frequencycleaning`, `preferredtime`, `priority`, `preferreddate`, `requirementdetails`, `additionalinfo`, `fname`, `lname`, `gender`, `address`, `email`, `phone`, `preferedcontact`, `userfile`) VALUES
(1, 1, '2', 'azertyu zertyui', '2001 - 2500', '5+', '5+', '5', 'No', NULL, '2', '2', 'One Time', 'Afternoon', 'Medium (within 1 week)', '18 April, 2019', 'azerty zrtyu', 'azerty zrtyu', 'zerfg eger', 'azerty', 1, 'sefred rgrgerg gegtr', 'azert@azert.zer', '0987654567', 1, ''),
(2, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(3, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(4, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(5, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(6, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(7, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(8, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(9, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(10, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, ''),
(11, 2, '2', 'azertyu zertyui', '1501 - 2000', '5', '5', '4', 'No', NULL, '2', '3', 'One Time', 'Afternoon', 'Medium (within 1 week)', '10 April, 2019', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 'azerty qsdfg', 1, 'azerty qsdfg', 'azert@azert.zer', '0987654567', 1, '');

-- --------------------------------------------------------

--
-- Structure de la table `symfony_demo_comment`
--

CREATE TABLE `symfony_demo_comment` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `symfony_demo_post`
--

CREATE TABLE `symfony_demo_post` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `symfony_demo_post_tag`
--

CREATE TABLE `symfony_demo_post_tag` (
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `symfony_demo_tag`
--

CREATE TABLE `symfony_demo_tag` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `symfony_demo_user`
--

CREATE TABLE `symfony_demo_user` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `quotation`
--
ALTER TABLE `quotation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `symfony_demo_comment`
--
ALTER TABLE `symfony_demo_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_53AD8F834B89032C` (`post_id`),
  ADD KEY `IDX_53AD8F83F675F31B` (`author_id`);

--
-- Index pour la table `symfony_demo_post`
--
ALTER TABLE `symfony_demo_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_58A92E65F675F31B` (`author_id`);

--
-- Index pour la table `symfony_demo_post_tag`
--
ALTER TABLE `symfony_demo_post_tag`
  ADD PRIMARY KEY (`post_id`,`tag_id`),
  ADD KEY `IDX_6ABC1CC44B89032C` (`post_id`),
  ADD KEY `IDX_6ABC1CC4BAD26311` (`tag_id`);

--
-- Index pour la table `symfony_demo_tag`
--
ALTER TABLE `symfony_demo_tag`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_4D5855405E237E06` (`name`);

--
-- Index pour la table `symfony_demo_user`
--
ALTER TABLE `symfony_demo_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8FB094A1F85E0677` (`username`),
  ADD UNIQUE KEY `UNIQ_8FB094A1E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `quotation`
--
ALTER TABLE `quotation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `symfony_demo_comment`
--
ALTER TABLE `symfony_demo_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `symfony_demo_post`
--
ALTER TABLE `symfony_demo_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `symfony_demo_tag`
--
ALTER TABLE `symfony_demo_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `symfony_demo_user`
--
ALTER TABLE `symfony_demo_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `symfony_demo_comment`
--
ALTER TABLE `symfony_demo_comment`
  ADD CONSTRAINT `FK_53AD8F834B89032C` FOREIGN KEY (`post_id`) REFERENCES `symfony_demo_post` (`id`),
  ADD CONSTRAINT `FK_53AD8F83F675F31B` FOREIGN KEY (`author_id`) REFERENCES `symfony_demo_user` (`id`);

--
-- Contraintes pour la table `symfony_demo_post`
--
ALTER TABLE `symfony_demo_post`
  ADD CONSTRAINT `FK_58A92E65F675F31B` FOREIGN KEY (`author_id`) REFERENCES `symfony_demo_user` (`id`);

--
-- Contraintes pour la table `symfony_demo_post_tag`
--
ALTER TABLE `symfony_demo_post_tag`
  ADD CONSTRAINT `FK_6ABC1CC44B89032C` FOREIGN KEY (`post_id`) REFERENCES `symfony_demo_post` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_6ABC1CC4BAD26311` FOREIGN KEY (`tag_id`) REFERENCES `symfony_demo_tag` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
