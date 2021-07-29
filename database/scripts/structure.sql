-- Creamos la base de datos
create database /* gaf_db */ charset utf8mb4 collate utf8mb4_unicode_ci;
use /* gaf_db */;

-- Tabla de usuarios
create table users (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    domicilio VARCHAR(300) NOT NULL,
    interes VARCHAR(100) NOT NULL,
    suscripcion VARCHAR(100) NOT NULL,
    image VARCHAR(100) NULL,
    PRIMARY KEY (id) 
);

-- Tabla de intereses de usuarios
create table interes (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Agregamos la relación con las temáticas
ALTER TABLE users ADD CONSTRAINT fk_user_category FOREIGN KEY (category_id) REFERENCES categories(id);


-- Tabla de productos
create table products (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
	description TEXT NULL,
    image VARCHAR(100) NULL,
    price DECIMAL(8,2) NULL DEFAULT 0,
    /* colors id */
    /* sizes id */
    /* brands */
    /* offer */
    /* outstanding */
    /* discount */
    thematic_id INT(11),
    PRIMARY KEY (id) 
);

-- Tabla de tematicas de productos
create table thematics (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Agregamos la relación con los usuarios
ALTER TABLE products ADD CONSTRAINT fk_product_thematic FOREIGN KEY (thematic_id) REFERENCES thematics(id);

-- Tabla de tags de productos
create table products_tags (
	product_id INT(11) NOT NULL,
	tag_id INT(11) NOT NULL,
    PRIMARY KEY (product_id, tag_id)
);

-- Tabla de tags
create table tags (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Agregamos la relación con los productos y tags
ALTER TABLE products_tags ADD CONSTRAINT fk_products_tags_product FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE products_tags ADD CONSTRAINT fk_products_tags_tag FOREIGN KEY (tag_id) REFERENCES tags(id);