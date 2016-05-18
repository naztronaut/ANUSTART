<?php

$server = "localhost"; //server name/url
$username = "nustart"; //MySQL Username
$password = ""; //MySQL Password 
$db = "nustart"; // MySQL Database name

// Create connection
$conn = mysqli_connect($server, $username, $password, $db);

if(mysqli_connect_errno()){
		echo "DB Connection failed: ". mysqli_connect_error(); //error checking
	} 

?>
