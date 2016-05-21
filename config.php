<?php
/*
config.php 
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

MySQL Database Configuration File
*/

$server = "localhost"; //server name/url
$username = "nustart"; // MySQL Username
$password = ""; // MySQL Password 
$db = "nustart"; // MySQL Database name

// Create connection
$conn = mysqli_connect($server, $username, $password, $db);

if(mysqli_connect_errno()){
		echo "DB Connection failed: ". mysqli_connect_error(); //error checking
	} 

?>
