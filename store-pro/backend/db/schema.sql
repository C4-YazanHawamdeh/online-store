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

CREATE TABLE carts(
id INT AUTO_INCREMENT NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
product_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
quantity INT(4),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);



INSERT INTO roles (role) VALUES("user");
INSERT INTO roles (role) VALUES("admin");

INSERT INTO users (userName,email,password,role_id) VALUES("yazan","ha@gmail","123",1);
INSERT INTO users (userName,email,password,role_id) VALUES("ahmad","ah@gmail","123",2);





INSERT INTO products (name,image,description,price) VALUES("Crowne Plaza","https://hyra.cron24.com/images/rooms/10009/room_11606550275.jpg","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","15");
INSERT INTO products (name,image,description,price) VALUES("Crowne Plaza","https://hyra.cron24.com/images/rooms/10009/room_11606550275.jpg","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","15");
INSERT INTO products (name,image,description,price) VALUES("Crowne Plaza","https://hyra.cron24.com/images/rooms/10009/room_11606550275.jpg","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","15");

