<?php
/*
analytics.php 
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

This script reads the IP Address and updateClick command 
sent by script.js to update (or insert into) the database 
to keep track of number of quotes generated.
*/

    include_once("config.php");

    if(isset($_POST['updateClick']) && isset($_POST['ipAddr']))
    {
        $ipaddr = $_POST['ipAddr'];
        $query = "INSERT INTO `analytics` (`clicks`,`ipaddr`) VALUES (1,'$ipaddr') ON DUPLICATE KEY UPDATE `clicks` = `clicks`+1";

        $result = mysqli_query($conn,$query);

        if($result)
        {
//            echo 'success';
        }
        else
        {
            echo 'failed';
        }
    }

?>