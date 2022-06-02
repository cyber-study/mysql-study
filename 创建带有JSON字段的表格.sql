
CREATE DATABASE IF NOT EXISTS test_database;

use test_database;

CREATE TABLE IF NOT EXISTS `test_json`(
  `id` INT AUTO_INCREMENT,
  `tags` json NOT NULL,
  `actor` json NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO test_json
  (tags,actor)
    VALUES
  ('["frank","mike"]','["actor1","actor2"]'),
  ('["frank","jake"]','["actor3","actor4"]'),
  ('["joun","nice"]','["actor1","actor4"]');

SELECT * FROM test_json;