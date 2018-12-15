<?php
    include 'function.php';
    
    //single art route
    if (isset($_GET["id"])){
        $data = get_single_car($pdo, $_GET["id"]);
        echo json_encode($data);
    } else {
        $data = get_all_cars($pdo);
        echo json_encode($data);
        //can use this for portfolio pieces too - does not only apply to media
    }


?>