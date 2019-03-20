DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

\c shop;



CREATE TABLE users (
  id SERIAL PRIMARY KEY,
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
  shopname VARCHAR NULL
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  seller_id INT REFERENCES users(id) NOT NULL,
  description VARCHAR NOT NULL,                 
  duration VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  images JSON 
);


CREATE TABLE purchase (
id SERIAL PRIMARY KEY,
users_id INT REFERENCES users(id) NOT NULL,
totalamount VARCHAR NOT NULL,
guest_info JSON
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
product_id INT REFERENCES users(id) NOT NULL,
purchase_id INT REFERENCES purchase(id) NOT NULL,
quantity INT,
descriptions VARCHAR NOT NULL,
buyer_guest_id VARCHAR NULL
);



INSERT INTO users (name, email, address, number, country, state, age, type, description, shopname) VALUES
('John', 'john@email.com', '123 Wilbury Drive','123-456-7890','USA', 'CA', 26, 'buyer','sellingexperiences','shopmix');

INSERT INTO product (seller_id,description, duration,location, type, name, price, images) VALUES
(1,'tennis on the beach','1month' ,'Ca', 'activity', 'SandyTennis','$65', '{"url" : "url"}');

INSERT INTO purchase (users_id, totalamount, guest_info) VALUES
(1, '$23', '{"guest" : "guest"}');

INSERT INTO orders (product_id,purchase_id, quantity, descriptions, buyer_guest_id) VALUES
(1,1,1,'BEachTennis',1);