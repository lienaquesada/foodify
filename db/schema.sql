CREATE DATABASE log_in;
USE  log_in;

CREATE TABLE ussers (
  id int NOT NULL AUTO_INCREMENT,
  ussername varchar(255) NOT NULL,
  pass varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ussers_ingredients (
  id int NOT NULL AUTO_INCREMENT,
  usser_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ingredients (
  id int NOT NULL AUTO_INCREMENT,
  ingredient_name varchar(255) NOT NULL,
  category_id varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  category_name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
