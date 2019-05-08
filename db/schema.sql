DROP DATABASE IF EXISTS wh40k_db;

CREATE DATABASE wh40k_db;

USE wh40k_db;

CREATE TABLE armies(
	id INT(3) AUTO_INCREMENT NOT NULL,
    army_name VARCHAR(30) NOT NULL,
    play BOOLEAN, 
    PRIMARY KEY (id)
);

CREATE TABLE figures(
	id INT(3) AUTO_INCREMENT NOT NULL,
    figure_name VARCHAR(35) NOT NULL,
    faction VARCHAR(30) NOT NULL,
    role VARCHAR(15),
    own BOOLEAN,
    PRIMARY KEY (id)
);