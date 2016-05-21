/*
table.sql 
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

Run the SQL Query below to create the necessary tables
*/

CREATE TABLE IF NOT EXISTS `analytics` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `clicks` int(255) NOT NULL,
 `ipAddr` varchar(255) NOT NULL,
 `lastAccess` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 UNIQUE KEY `ipAddr` (`ipAddr`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `nustart` (
 `id` int(7) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL,
 `quote` text NOT NULL,
 `tags` text NOT NULL,
 `showTitle` varchar(255) NOT NULL,
 `counter` int(32) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=latin1;