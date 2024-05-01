<?php 
session_start();

require '../Database/getDatabase.php';
require '../../public/bootstrap.php';


function getUserTodos ($userId) {
    $sql = getPDO()->prepare("SELECT `folderName` FROM `folders` WHERE userID = ?");
    $sql->execute([$userId]);
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    
    return $result;
}


$theResults =  getUserTodos($_SESSION['user']['id']);

 echo strip_tags(stripslashes(json_encode($theResults, JSON_PRETTY_PRINT)));

