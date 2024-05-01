 <?php

require '../public/bootstrap.php';

use App\Router\Router;
use App\Exception\RouteNotFoundexception;

require '../vendor/autoload.php';
// require '../App/includes/header.php';

$router = new Router();

$router->register('/' , ['Controllers\HomeController', 'index']);


// dd();
try {
    echo $router->resolve($_SERVER['REQUEST_URI']);
} catch (RouteNotFoundexception $th) {
    echo $th->getMessage();
}





; ?>
