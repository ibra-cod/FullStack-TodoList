<?php 
session_start();
require '../../public/bootstrap.php';

function isUserConnected($session) {

    if (empty($session) && !is_connected()) {
        return false;
    }
    return true;

}


$result = !empty($_SESSION) ? $connectionResult = isUserConnected($_SESSION['user']) : false;


if ($result != false) {
    echo  strip_tags(stripslashes(json_encode($connectionResult, JSON_PRETTY_PRINT)));
}
else {
    echo strip_tags(stripslashes(json_encode($result, JSON_PRETTY_PRINT)));;
}