DROP  DATABASE store;
CREATE DATABASE store;
use store;


CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);


CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE products(
 id INT AUTO_INCREMENT NOT NULL,
 name VARCHAR(255) NOT NULL,
 image VARCHAR(255) NOT NULL,
 description VARCHAR(255) NOT NULL,
 price INT(7) NOT NULL,
 is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

