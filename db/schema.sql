
USE n6twlrk0j7y35fy1;

CREATE TABLE armies(
	id INT(3) AUTO_INCREMENT NOT NULL,
    army_name VARCHAR(50) NOT NULL,
    play BOOLEAN, 
    PRIMARY KEY (id)
);

CREATE TABLE figures(
	id INT(3) AUTO_INCREMENT NOT NULL,
    figure_name VARCHAR(35) NOT NULL,
    faction VARCHAR(30) NOT NULL,
    role VARCHAR(30),
    own BOOLEAN,
    PRIMARY KEY (id)
);