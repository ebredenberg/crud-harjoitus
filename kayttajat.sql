-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 12:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kayttajat`
--

-- --------------------------------------------------------

--
-- Table structure for table `henkilot`
--

CREATE TABLE `henkilot` (
  `id` int(11) NOT NULL,
  `nimi` varchar(50) NOT NULL,
  `puhelinnumero` varchar(20) NOT NULL,
  `sahkopostiosoite` varchar(75) NOT NULL,
  `titteli` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `henkilot`
--

INSERT INTO `henkilot` (`id`, `nimi`, `puhelinnumero`, `sahkopostiosoite`, `titteli`) VALUES
(1, 'John McClane', '0400123456', 'john.mcclane@gmail.com', 'LAPD-Detective'),
(2, 'Jaska Jokunen', '0400321654', 'jokunen.jaska@jaskaton.com', 'Teräsmies'),
(5, 'Pelle Peloton', '05001233345', 'pellenpaja@peloton.fi', 'Keksijä'),
(6, 'Aku Ankka', '0400 313 313', 'aku.ankka@ankkalinna.fi', 'Setämies'),
(8, 'Hessu Hopo', '0400777777', 'hessu.hopo@valtionkonttori.fi', 'Presidentti');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `henkilot`
--
ALTER TABLE `henkilot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `henkilot`
--
ALTER TABLE `henkilot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
