<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");


    $conn = new mysqli("localhost", "react-user", "1234", "user");
    if(mysqli_connect_error()){
        echo mysqli_connect_error():
        exit();
    }
    else{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        $user = $dData['user'];
        $password = $dData['password'];
        $result = "";

        if($user != "" and $password != ""){
            $sql = "SELECT * FROM user WHERE user='$user' AND password='$password';";
            $res = mysqli_query($conn, $sql); 

            if(mysqli_num_rows($res) != 0){
                $result = "Logeado correctamente";
            }
            else{
                $result = "";
            }
        }
        else{
            $result = "";
        }
        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }
?>
