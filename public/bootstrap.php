<?php 

function is_post() : bool 
{
    return $_SERVER['REQUEST_METHOD'] === 'POST';
}


function dd( mixed $variable) : void 
{

    echo "<pre>";
        var_dump($variable);
    echo "</pre>";
}

function is_valid( mixed $donnees) : mixed{

    if (is_int($donnees)) {
        $donnees = stripslashes($donnees);
        $donnees = htmlspecialchars($donnees);
        return $donnees;
    } else {
        $donnees = trim($donnees);
        $donnees = stripslashes($donnees);
        $donnees = htmlspecialchars($donnees);
        return $donnees;
    }
}

function is_connected() : bool
{
    if (session_status() ===  PHP_SESSION_NONE) {
      return  session_start();
    }
    return !empty($_SESSION['user']);

}
