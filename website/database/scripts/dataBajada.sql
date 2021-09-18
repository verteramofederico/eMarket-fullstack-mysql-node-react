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
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
INSERT INTO `Brands` VALUES (4,'Fontana'),(3,'Gaucho'),(2,'Ombu'),(1,'Pampero');
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `CartProducts`
--

LOCK TABLES `CartProducts` WRITE;
/*!40000 ALTER TABLE `CartProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `CartProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (2,'Calzado'),(4,'Otros'),(1,'Ropa de trabajo'),(3,'Seguridad');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Colors`
--

LOCK TABLES `Colors` WRITE;
/*!40000 ALTER TABLE `Colors` DISABLE KEYS */;
INSERT INTO `Colors` VALUES (1,'Azul','rgb(33, 150, 243, 0.7)'),(2,'Negro','rgb(76, 175, 80, 0.7)'),(3,'Verde','rgb(0, 0, 0, 0.7)'),(4,'Beige','rgb(245, 245, 190)');
/*!40000 ALTER TABLE `Colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `colorsProducts`
--

LOCK TABLES `colorsProducts` WRITE;
/*!40000 ALTER TABLE `colorsProducts` DISABLE KEYS */;
INSERT INTO `colorsProducts` VALUES (1,9,1),(2,10,1),(3,10,2),(4,2,3),(5,3,1),(6,3,2),(7,4,4),(8,4,1);
/*!40000 ALTER TABLE `colorsProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `paymentMethods`
--

LOCK TABLES `paymentMethods` WRITE;
/*!40000 ALTER TABLE `paymentMethods` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymentMethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Guantes',1100,1,1,'dfsdfs','134533008-Guante-Terrycloth-Industrial-Moteado-Pesado-300x300.jpeg',NULL,NULL,12),(2,'Zapato de seguridad',5200,2,1,'Zapato de seguridad','calzado-P41FM-300x300.jpeg',NULL,NULL,10),(3,'Chaleco',2300,1,2,'Zapato de seguridad','chaleco-canvas_05A9263.jpeg',NULL,NULL,12),(4,'Traje de lluvia',2300,1,1,'Traje de lluvia','image-1629300069422.jpg',NULL,NULL,16),(5,'Bermuda cargo',3300,1,3,'Bermuda cargo','bermuda-cargo_05A9366-300x300.jpeg',NULL,NULL,18),(6,'Bota de lluvia',1999,1,4,'Bota de lluvia','bota-Jobmaster-nueva-300x300.jpeg',NULL,NULL,20),(7,'Camisa de trabajo',2122,1,2,'Camisa','image-1629300113796.jpeg',NULL,NULL,12),(8,'Pantalon de trabajo',2111,1,1,'Pantalon','image-1629300094742.jpeg',NULL,NULL,11),(9,'Camisa Ombu    ',1900,4,2,'','image-1629294378142.jpeg',0,0,0),(10,'Camisa Ombu',1902,2,2,'Camisa Ombu','image-1629294442863.jpeg',1,1,12),(11,'Camisa Ombu     ',1900,4,2,'Camisa Ombu','image-1629761980529.pdf',0,0,0),(12,'Camisa Ombu dsadsadsdsa',1900,4,2,'dadsdsdssdadasdsdsadas','image-1629308574458.jpeg',0,0,0),(13,'Camisa Ombu1 ',1900,4,2,'dasdsadsadasdasasdsdadsdsa','image-1629683659914.jpeg',0,0,0),(14,'Pantalon Pampero cargo',1900,4,2,'pantalon con cargo de refuerzo','image-1629763230687.jpeg',0,0,0),(15,'Camisa Ombu',1900,4,2,'adokdsjsaddsokdsoakdokdas','image-1629763301930.jpeg',0,0,0),(16,'Pantalon',122112,4,2,'dfsdfdfsfdsdfsdfsdfs','image-1629763414075.jpeg',0,0,0);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210803015550-brands.js'),('20210803021150-categories.js'),('20210803021541-products.js'),('20210803023025-colors.js'),('20210803023144-colorsProducts.js'),('20210803023919-sizes.js'),('20210803023925-sizesProducts.js'),('20210806193619-create-user.js'),('20210806193703-create-cart.js'),('20210806193721-create-cart-product.js'),('20210806193751-create-payment-method.js'),('20210806193754-create-order.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Sizes`
--

LOCK TABLES `Sizes` WRITE;
/*!40000 ALTER TABLE `Sizes` DISABLE KEYS */;
INSERT INTO `Sizes` VALUES (6,'38'),(7,'39'),(8,'40'),(9,'41'),(10,'42'),(11,'43'),(12,'44'),(4,'L'),(3,'M'),(2,'S'),(1,'unico'),(5,'XL');
/*!40000 ALTER TABLE `Sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sizesProducts`
--

LOCK TABLES `sizesProducts` WRITE;
/*!40000 ALTER TABLE `sizesProducts` DISABLE KEYS */;
INSERT INTO `sizesProducts` VALUES (1,9,6),(2,10,6),(3,10,7),(4,10,8),(5,5,8),(6,6,1),(7,7,2),(8,8,3);
/*!40000 ALTER TABLE `sizesProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'John Doe','verte@gmail.com','$2a$10$Iv6rSgldegKROW6KcCzbF.2rRMzXu6.Xx.TgZ490I7i576N/xteVm','la plata 123','construccion',0,'image-1626276005998.jpeg',NULL,NULL),(2,'Administrador','fede@gaf.com','$2a$10$Iv6rSgldegKROW6KcCzbF.2rRMzXu6.Xx.TgZ490I7i576N/xteVm','la plata 123','construccion',0,'image-1626276005998.jpeg',NULL,NULL),(3,'Admin','admin@gaf.com','$2a$10$Iv6rSgldegKROW6KcCzbF.2rRMzXu6.Xx.TgZ490I7i576N/xteVm','Corrientes 21','Sanitario',NULL,'image-1629294335320.jpeg','2021-08-18 13:45:35','2021-08-18 13:45:35'),(4,'Federico Verteramo','admin3@gaf.com','$2a$10$eBU8cp794QaanJcIqlfzFeWxeqL/F9CJ6BqJNS6/zLXx.p2FGTypW','La Garza 1259',NULL,NULL,'image-1629676628454.jpeg','2021-08-22 23:57:08','2021-08-22 23:57:08'),(13,'Tito puentEs','fede_10_91@hotmail.com','$2a$10$GG29aJUn4lGP05bKU1r16eqeIrJeD5E2Oqst7vtt9P3X5SF36eibK','La Garza 1259',NULL,NULL,'image-1629849849896.jpeg','2021-08-25 00:04:10','2021-08-25 00:04:10'),(14,'fjisdjifijfdijd','fsddfssdfdfs@gaf.com','$2a$10$iojcMQt0KMhAj3cK6oy6XOJ8zb01bO/Njy0KqodfloX6homnt.402','fdsfdsfdsdfsfds',NULL,NULL,'image-1629849985570.jpeg','2021-08-25 00:06:25','2021-08-25 00:06:25'),(16,'dsaddassadasddsa','admin2@gaf.com','$2a$10$cnfUcJQo9toV8xvGSzY3A.nKpWL54EF8wsfpliXrgkDiacVZilSN6','La Garza 1259',NULL,NULL,'image-1629850281382.jpeg','2021-08-25 00:11:21','2021-08-25 00:11:21');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gaf_db'
--

--
-- Dumping routines for database 'gaf_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-10 14:23:53
