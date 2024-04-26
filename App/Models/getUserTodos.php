<?php 
session_start();

require '../database/Database.php';
require '../../public/bootstrap.php';




function getUserTodos () {
    $sql = getPDO()->prepare("SELECT * FROM `todos` INNER JOIN `folders` ON todos.id = folders.id");
    $sql->execute();
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    
    return $result;
}


$theResults =  getUserTodos( $_SESSION['user']['id']);

 echo strip_tags(stripslashes(json_encode($theResults, JSON_PRETTY_PRINT)));




 

