


CREATE DATABASE IF NOT EXISTS `test_json` (
  `tags` json,
  `actor` json
) ENGINE=InnoDB AUTO_INCREMENT=1 CHARSET=utf8;

INSERT INTO test_json (tags) VALUES ('["frank","mike"]'),('["frank","jake"]'),('["joun","nice"]');