<?php
    include_once("config.php");

    $query = "SELECT * FROM nustart ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($conn, $query);

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

        //encode array to json and echo it
        print_r(json_encode($newdata));
    }
?>