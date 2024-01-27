USE appdb;

CREATE TABLE IF NOT EXISTS `people` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
);