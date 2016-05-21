<?php
/*
source.php 
Title: ANUSTART
Author: Nazmus
URL: http://nazm.us
Github: https://github.com/nlinux1/

This script outputs data from the MySQL Database table containing quotes
*/
    include_once("config.php");

    $query = "SELECT * FROM nustart";
    
    if(isset($_GET['title']))
    {
        $query .= " WHERE showTitle='". $_GET['title']."'";
        
        if(isset($_GET['id']))
        {
            $query .= " AND id = ". $_GET['id'];
        }
    }
    else
    {
        if(isset($_GET['id']))
        {
            $query .= " WHERE showTitle = 'ad' AND id = ". $_GET['id'];
        }
    }

//    if(isset($_GET['id']))
//    {
//        $query .= " WHERE id=".$_GET['id'];
//        
//        if(isset($_GET['title']))
//        {
//            $title = $_GET['title'];
//        }
//        else 
//        {
//            $title = "ad";
//        }
//           
//           $query .= " AND showTitle = '$title'";
//    }
    $query .= " ORDER BY RAND() LIMIT 1";
//echo $query;
    $result = mysqli_query($conn, $query);
//    echo mysqli_num_rows($result);
if(mysqli_num_rows($result) > 0){
    while($rows = mysqli_fetch_assoc($result)) //loop and print team name, number, ticker, vts/ir URLs
    {
        //add every line to a different array
        $individuals = explode("\n",$rows['quote']);

        //create new data array
        $data = array();
        foreach($individuals as $individual)
        {
            //take each newline item and put into a temporary values $name and $quote
            list($name,$quote) = explode(":",$individual);
            //push new array into data array as name and quote - key:value pairs
            array_push($data, array("name" => $name, "quote" => $quote));
        }
        //newdata arary
        $newdata = array();
        foreach($data as $dataset)
        {
            //add each $data array into $newdata array             
            array_push($newdata,($dataset));
        }
        array_push($newdata,array("id" => $rows['id']));
        array_push($newdata,array("title" => $rows['showTitle']));
        //encode array to json and echo it
        print_r(json_encode($newdata));
        
        //count the number of times this row was loaded 
        $updateCounter = "UPDATE `nustart` SET `counter`= `counter`+1 WHERE id = " . $rows['id'];
        mysqli_query($conn,$updateCounter);
    }
}

else {
    $error = array();
    array_push($error,array("name"=>"Error","quote"=>"No results found, try again!"));
    array_push($error,array("id"=>"1"));
    array_push($error,array("title" => ""));
//    print_r($error);
    print_r(json_encode($error));
    
}
?>