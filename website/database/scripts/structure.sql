CREATE DATABASE  IF NOT EXISTS `gaf_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gaf_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: gaf_db
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Brands`
--

DROP TABLE IF EXISTS `Brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
INSERT INTO `Brands` VALUES (4,'Fontana'),(3,'Gaucho'),(2,'Ombu'),(1,'Pampero');
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CartProducts`
--

DROP TABLE IF EXISTS `CartProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CartProducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` bigint(10) unsigned DEFAULT NULL,
  `subtotal` bigint(10) unsigned DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `cartproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cartproducts_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CartProducts`
--

LOCK TABLES `CartProducts` WRITE;
/*!40000 ALTER TABLE `CartProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `CartProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Carts`
--

DROP TABLE IF EXISTS `Carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` bigint(10) unsigned DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (2,'Calzado'),(4,'Otros'),(1,'Ropa de trabajo'),(3,'Seguridad');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Colors`
--

DROP TABLE IF EXISTS `Colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `value` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Colors`
--

LOCK TABLES `Colors` WRITE;
/*!40000 ALTER TABLE `Colors` DISABLE KEYS */;
INSERT INTO `Colors` VALUES (1,'Azul','rgb(33, 150, 243, 0.7)'),(2,'Negro','rgb(76, 175, 80, 0.7)'),(3,'Verde','rgb(0, 0, 0, 0.7)'),(4,'Beige','rgb(245, 245, 190)');
/*!40000 ALTER TABLE `Colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colorsProducts`
--

DROP TABLE IF EXISTS `colorsProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colorsProducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `colorsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `colorsId` (`colorsId`),
  CONSTRAINT `colorsproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `colorsproducts_ibfk_2` FOREIGN KEY (`colorsId`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colorsProducts`
--

LOCK TABLES `colorsProducts` WRITE;
/*!40000 ALTER TABLE `colorsProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `colorsProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cartId` (`cartId`),
  KEY `paymentId` (`paymentId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`paymentId`) REFERENCES `paymentmethods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentMethods`
--

DROP TABLE IF EXISTS `paymentMethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentMethods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentMethods`
--

LOCK TABLES `paymentMethods` WRITE;
/*!40000 ALTER TABLE `paymentMethods` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentMethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `categoriesId` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `offer` bigint(10) unsigned DEFAULT NULL,
  `outstanding` bigint(10) unsigned DEFAULT NULL,
  `discount` bigint(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `brandId` (`brandId`),
  KEY `categoriesId` (`categoriesId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoriesId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Guantes',1100,1,1,'dfsdfs','134533008-Guante-Terrycloth-Industrial-Moteado-Pesado-300x300.jpeg',NULL,NULL,12),(2,'Zapato de seguridad',5200,2,1,'Zapato de seguridad','calzado-P41FM-300x300.jpeg',NULL,NULL,10),(3,'Chaleco',2300,1,2,'Zapato de seguridad','chaleco-canvas_05A9263.jpeg',NULL,NULL,12),(4,'Traje de lluvia',2300,1,1,'Traje de lluvia','111121003-Traje-de-Lluvia-.campera.-300x300.jpg',NULL,NULL,16),(5,'Bermuda cargo',3300,1,3,'Bermuda cargo','bermuda-cargo_05A9366-300x300.jpeg',NULL,NULL,18),(6,'Bota de lluvia',1999,1,4,'Bota de lluvia','bota-Jobmaster-nueva-300x300.jpeg',NULL,NULL,20),(7,'Camisa de trabajo',2122,1,2,'Camisa','camisa-de-trabajo_05A8787-300x300.jpeg',NULL,NULL,12),(8,'Pantalon de trabajo',2111,1,1,'Pantalon','camisa-de-trabajo_05A8787-300x300.jpeg',NULL,NULL,11);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210803015550-brands.js'),('20210803021150-categories.js'),('20210803021541-products.js'),('20210803023025-colors.js'),('20210803023144-colorsProducts.js'),('20210803023919-sizes.js'),('20210803023925-sizesProducts.js'),('20210806193619-create-user.js'),('20210806193703-create-cart.js'),('20210806193721-create-cart-product.js'),('20210806193751-create-payment-method.js'),('20210806193754-create-order.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sizes`
--

DROP TABLE IF EXISTS `Sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sizes`
--

LOCK TABLES `Sizes` WRITE;
/*!40000 ALTER TABLE `Sizes` DISABLE KEYS */;
INSERT INTO `Sizes` VALUES (6,'38'),(7,'39'),(8,'40'),(9,'41'),(10,'42'),(11,'43'),(12,'44'),(4,'L'),(3,'M'),(2,'S'),(1,'unico'),(5,'XL');
/*!40000 ALTER TABLE `Sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizesProducts`
--

DROP TABLE IF EXISTS `sizesProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizesProducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `sizesId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `sizesId` (`sizesId`),
  CONSTRAINT `sizesproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `sizesproducts_ibfk_2` FOREIGN KEY (`sizesId`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizesProducts`
--

LOCK TABLES `sizesProducts` WRITE;
/*!40000 ALTER TABLE `sizesProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizesProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `domicilio` varchar(255) DEFAULT NULL,
  `interes` varchar(255) DEFAULT NULL,
  `suscripcion` tinyint(1) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'John Doe','verte@gmail.com','kdfsjfjid','la plata 123','construccion',0,'image-1626276005998.jpeg',NULL,NULL),(2,'Administrador','fede@gaf.com','$2a$10$2pRXzXQaOYw.IOmmjHM8QOxPseTHbgz49xM5VrjGT9A2g12eHI1xW','la plata 123','construccion',0,'image-1626276005998.jpeg',NULL,NULL),(3,'Federico Verteramo','verteramo.federico@gmail.com','$2a$10$2pRXzXQaOYw.IOmmjHM8QOxPseTHbgz49xM5VrjGT9A2g12eHI1xW','La Garza 1259','construccion',NULL,'image-1629228716166.jpeg','2021-08-17 19:31:56','2021-08-17 19:31:56'),(4,'Juan Perez','juan@gmail.com','$2a$10$5eI3O81xZtQRphndiW9QYOegaOG7dCyvWRtpdVrAZzERj14PqTdRm','Lorenzo 12','jardineria',NULL,'image-1629228993507.jpeg','2021-08-17 19:36:33','2021-08-17 19:36:33'),(5,'Pedro Sanchez','pedro@gmail.com','$2a$10$/VD33bIxLUK5pnnpljeQPemT1bcY1x6Fr5cXN8nG6cso5Msfe11RO','123456','construccion',NULL,'image-1629229261875.jpeg','2021-08-17 19:41:02','2021-08-17 19:41:02'),(12,'Eduardo Oscar','veotex@gmail.com','$2a$10$3a.oWOWgwtrzvoMsb2Fpw.9FxWCZVmlpNW38AsJ5SsxBukfuw/7/m',' jsokaosdk','veotex@gmail.com',NULL,'image-1629231476805.jpeg','2021-08-17 20:17:57','2021-08-17 20:17:57'),(13,'marcos','marcos@gmail.com','$2a$10$7atAielt5Ua2AY6dp/.iSuTMka3ymN6InDPBQyQMVV58UtT8IJXqS','marcos 12','Sanitario',NULL,'image-1629231528432.jpeg','2021-08-17 20:18:48','2021-08-17 20:18:48'),(14,'admin','admin@gaf.com','$2a$10$GpGanCzQW75dKUoQysFQ8OpAkkbJ5WErMYGe6WGOqPynEL.f0vk8m','Corrientes 21',NULL,NULL,'image-1629231699498.jpeg','2021-08-17 20:21:39','2021-08-17 20:21:39');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-18  9:36:03
