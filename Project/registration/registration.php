<?php 
    $username = $_REQUEST['username'];
    $email = $_REQUEST["email"];
    $password = $_REQUEST["password"];
    
    
    if(file_exists("database/".$username.".txt")){
        echo "Username already exists";
    }else{
    $file = fopen("database/".$username.".txt","a");
    fwrite($file,$username.PHP_EOL);
    fwrite($file,$email.PHP_EOL);
    fwrite($file,$password.PHP_EOL);
    fclose($file);
    echo "Registration Succesfull";
    }
    
?>