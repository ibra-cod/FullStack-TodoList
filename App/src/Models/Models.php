<?php
namespace App\Models;

use App\Database\Database;

require '../../vendor/autoload.php';

class Model
{
 

    public function prepare()
    {
        $connection = new Database(DBNAME,DBHOST,DBUSER,DBPASS);
       $request = $connection->getPDO()->prepare("SELECT * FROM users");
       $request->execute();

       $resumt = $request->fetchAll();
       return $resumt;
       
    } 

}

$m = new Model();

var_dump($m->prepare());


