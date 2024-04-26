<?php 
session_start();
require '../database/Database.php';
require '../../public/bootstrap.php';
$pdo = getPDO();
$p = file_get_contents('php://input'); 
$d = json_decode($p, true);


if (is_post()) {
    if (is_connected()) {
        if (isset($d["todoName"]) && isset($d["todoDescription"]) 
            && isset($d["folderName"]) && isset($d["todoStatus"]) 
            && isset($d["todoSubstack"])  && isset($_SESSION['user']['id'])) 
        {
            $sql = $pdo->prepare("INSERT INTO todos(todoName, todoDescription, todoStatuts, todoSubstack, userId) VALUES(?, ?, ? , ? , ?)");
        
            $sql->bindValue(1, $d['todoName'], PDO::PARAM_STR);
            $sql->bindValue(2,$d['todoDescription'], PDO::PARAM_STR);
            $sql->bindValue(3, $d['todoStatus'] , PDO::PARAM_STR);
            $sql->bindValue(4,  $d['todoSubstack'] , PDO::PARAM_STR);
            $sql->bindValue(5, $_SESSION['user']['id'] , PDO::PARAM_INT);
            $sql->execute();

            $lastId = $pdo->lastInsertId(); 

            $request = $pdo->prepare("INSERT INTO folders(foldername, userID, todoID) VALUES(?, ?, ? )");
            $request->bindValue(1,$d["folderName"] , PDO::PARAM_INT);
            $request->bindValue(2, $_SESSION['user']['id'] , PDO::PARAM_INT);
            $request->bindValue(3, $lastId , PDO::PARAM_INT);
        
            $request->execute();

           echo json_encode('Your todo have been added succesfully');

        
        }
    }
    
        
}


    
   







