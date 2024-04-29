<?php 
require '../App/includes/header.php'; 
require '../vendor/autoload.php';




// require '../App/database/Database.php'; 
if (is_connected()) {
    header('Location: index.php');
    dd($_COOKIE['connection']);
}

// dd(Database::getPDO())

?>

<section class="registerSectionContainer">
        <div class="RegisterContainer">
            <form action="../App/Elements/Login.php" method="POST">
                <div class="formdiv">
                    <div class="register-Elements elements">
                        <label for="username">Enter your email</label>
                        <input class="inputRegister" type="text" name="email" id="">
                    </div>

                    <div class="register-Elements elements">
                        <label for="password">Enter your password</label>
                        <input class="inputRegister" type="password" placeholder="enter a password" name="password">
                    </div>
                </div>
                <div class="flex">
                    <button type="submit" name="submit">login</button>
                    <p>Don't have an account ?  <strong><a href="./register.php">Register</a></strong></p>
                </div>
            </form>
        </div>
</section>

<?php require '../App/includes/footer.php'; ?>

use App\Database\Database;
