<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $accountname = $_POST['accountname'];
    $phonenumber = $_POST['phonenumber'];
    $emailaddress = $_POST['emailaddress'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];

    //Database connection
    $conn = new mysqli('localhost','root','','travel_mate');
    if($conn->connect_error)
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("insert into registartion(firstname,lastname,accountname,phonenumber,emailaddress,password,confirmpassword)values(?,?,?,?,?,?,?");
        $stmt->bindparam("sssssi",$firstname,$lastname,$accountname,$phonenumber,$emailaddress,$password,$confirmpassword);
        $stmt->execute();
        echo "registrartion sucessfully..."
        $stmt->close();
        $conn->close();
    }

?>



