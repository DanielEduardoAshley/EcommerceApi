DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

\c shop;



CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  number VARCHAR NOT NULL,
  country VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  zip INT,
  cc INT,
  age INT,
  type VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  shopname VARCHAR NULL,
  uid VARCHAR UNIQUE Null
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  seller_id INT REFERENCES users(id) NOT NULL,
  description VARCHAR NOT NULL,                 
  duration VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  price INT NOT NULL,
  images JSON 
);


CREATE TABLE purchase (
id SERIAL PRIMARY KEY,
users_id INT REFERENCES users(id)  NULL,
receipt VARCHAR NOT NULL,
totalamount VARCHAR NOT NULL,
name VARCHAR NOT NULL,
address VARCHAR NOT NULL,
city VARCHAR NOT NULL,
state VARCHAR NOT NULL,
country VARCHAR NOT NULL,
cc VARCHAR NOT NULL
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
product_id INT REFERENCES users(id) NULL,
purchase_id INT REFERENCES purchase(id) NOT NULL,
quantity INT,
description VARCHAR NOT NULL,
receipt VARCHAR NOT NULL
);



INSERT INTO users (username,name, email, address, number, country, state, age, type, description, shopname, uid) VALUES
('dash123','Johnhvgh', 'john@email.com', '123 Wilbury Drive','123-456-7890','USA', 'CA', 26, 'buyer','sellingexperiences','shopmix', 'ddwf1');

INSERT INTO product (seller_id,description, duration,location, type, name, price, images) VALUES
(1,'tennis on the beachcghg','1month' ,'Ca', 'activity', 'SandyTennis',65, '[]');

INSERT INTO purchase (users_id, receipt, totalamount, name, address, city, state, country,cc) VALUES
(1, '4rfrrgfhg','$23', 'John', '1234 Wilbury St','brooklyn', 'CA','USA', '3432');

INSERT INTO orders (product_id, purchase_id, quantity, description, receipt) VALUES
(1,1,1,'BEachTennis','1gfg');