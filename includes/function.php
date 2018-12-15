<?php
    include 'connect.php';
    // get one art first
    function get_single_car($pdo, $car) {
        $query = "SELECT * FROM mainmodel, video, tbl_mainmodel_video WHERE mainmodel.id = tbl_mainmodel_video.mainmodel_id AND video.id = tbl_mainmodel_video.video_id AND modelNo = $car"; 
        //attach the id in the thumnail to ensure you are getting the right image

        $get_car = $pdo->query($query);
        $results = array();

        while($row = $get_car->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }

    //get all art
    function get_all_cars($pdo) {
        $query = "SELECT * FROM mainmodel, video, tbl_mainmodel_video WHERE mainmodel.id = tbl_mainmodel_video.mainmodel_id AND video.id = tbl_mainmodel_video.video_id";
        
        $get_car = $pdo->query($query);
        $results = array();
        
        while($row = $get_car->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        
        return $results; 
    }

?>