<?php 
namespace App\Database;

use PDO;
use App\Models\Models;


require '../helpers/config.php';

class Database {
      private $dbname;
      private $host;
      private $username;
      private $password;
      private $pdo;

      public  function __construct(string $dbname, string $host, string $username, string $password) {
           $this->dbname = $dbname;
           $this->username = $username;
           $this->host = $host;
           $this->password = $password;
           
      }

      public function getPDO(): PDO {

            // peut être transformer en ternaire ...
        if (is_null($this->pdo)) {
            $this->pdo = new PDO("mysql:dbname={$this->dbname};host={$this->host}", $this->username, $this->password);
        }
        return $this->pdo;
      }


}