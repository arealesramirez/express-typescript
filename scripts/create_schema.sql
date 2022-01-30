CREATE DATABASE teams_system;

CREATE TABLE `teams_system`.`teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `league` VARCHAR(45) NOT NULL,
  `isActive` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
