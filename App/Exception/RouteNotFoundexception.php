<?php 

namespace App\Exception;

use Exception;

class RouteNotFoundexception extends Exception
{
    protected $message = 'This route is not found !';
}
