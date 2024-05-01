<?php require '../App/includes/header.php'; ?>

<?php 


if (is_connected()) {
    header('Location: ./index.php');
    
}
 ?>
<section class="registerSectionContainer">
        <div class="RegisterContainer">
            <form action="../App/Elements/Register.php" method="POST">
                <div class="formdiv">
                <div class="register-Elements elements">
                        <label for="fullname">choose a fullname</label>
                        <input require class="inputRegister" type="text" name="fullName" placeholder="Enter your full name">
                    </div>
                    <div class="register-Elements elements">
                        <label for="username">choose a username</label>
                        <input require class="inputRegister" type="text" name="username" placeholder="choose a user name">
                    </div>

                    <div class="register-Elements elements">
                        <label for="email">Enter your email</label>
                        <input require class="inputRegister" name="email" type="email" placeholder="enter your email">
                    </div>
                    <div class="register-Elements elements">
                        <label for="email">Enter your password</label>
                        <input require class="inputRegister" type="password" placeholder="enter a password" name="password">
                    </div>
                </div>
                <div class="flex">
                    <button type="submit" name="submit">login</button>
                    <p>Don't have an account ?  <strong><a href="./login.php">Login</a></strong></p>
                </div>
            </form>
        </div>
</section>

<?php require '../App/includes/footer.php'; ?>
