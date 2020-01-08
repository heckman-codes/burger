CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger
(
    id INT(10) AUTO_INCREMENT,
    burger VARCHAR (50) NOT NULL,
    devour BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);
