 <?php 
require '../vendor/autoload.php';
// require '../App/includes/header.php';

$router = new router();

$router->register('/' , function() {
    return 'HomePage';
});

$router->register('/' , function() {
    return 'Contact Page';
});


; ?>
