<?php
    include_once("config.php");

    if(isset($_POST['updateClick']) && isset($_POST['ipAddr']))
    {
        $ipaddr = $_POST['ipAddr'];
//        echo $_SERVER['REQUEST_URI'];
//        $query = "UPDATE `analytics` SET `clicks`=`clicks`+1 WHERE `id`=1";
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