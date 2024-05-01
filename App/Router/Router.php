<?php 

namespace App\Router;

use App\Exception\RouteNotFoundexception;

class Router
{
    private Array $routes;

    public function register(String $path, Callable | Array  $action ) : void
    {
        $this->routes[$path] = $action;
    }


    public function resolve (String $uri)
    {
        $path = explode('?', $uri)[0];
        $action = $this->routes[$path] ?? null;


        if (is_callable($action)) {
           return $action();
        }

        if (is_array($action)) {
            
             [$className, $method] = $action;

             if (class_exists($className) && method_exists($className, $method)) {
                $class = new $className();
                return call_user_func_array([$class,$method], []);
                
             } else {
                echo' no';
             }
        }

        return new RouteNotFoundexception();

    }
    
    
}
