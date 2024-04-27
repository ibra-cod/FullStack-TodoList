<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remember it</title>
    <link rel="stylesheet" href="css/todoCss.css">
    <link rel="stylesheet" href="css/register.css">
    <script type="module" src="js/main.js" defer></script>
</head>
<body>

<?php require "../App/includes/aside.php";
        require_once '../public/bootstrap.php'
?>

<header class="header">
        <nav class="nav-header">
            <a href="#">notifyy</a>
           <div>
                <?php if ( isset($_SESSION['user']) || !empty($_SESSION['users'])) : ?>
                    <button type="button" class="signIn"><a href="../App/helpers/sessionDestroy.php">Log Out</a></button>
                <?php else : ?>
                    <button type="button" class="signIn"><a href="./register.php">sign In</a></button>
                <?php endif ?> 


                <button type="button" class="DashboaordClass" id="Dashboard">Dashboaord</button>
           </div>
</header>


