<?php
require_once '../../public/bootstrap.php';
require '../database/getDatabase.php';


if(is_post()) {
    if (isset($_POST['submit'])) {
        $email = is_valid($_POST['email']);
        $pass = is_valid($_POST['password']);
    
        if (  strlen($email) > 1 && strlen($pass) >  4) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $request = $pdo->prepare('SELECT * FROM `users` WHERE email = ?');
                $request->execute([$email ]);

                $count = $request->rowCount();
                dd($count);
                if ($count === 1) {
                    $user = $request->fetch();
                    dd($user);
                    if (password_verify($pass, $user['pass'])) {
                        echo 'yes';
                        session_start();
                        $_SESSION['user'] = $user;
                        $userID = $_SESSION['user']['id'];
                        header('Location: ../../public/index.php');
                        setcookie('connection', true, time()+2*24*60*60);
                        exit();
                    }else {
                        echo 'Email or password incoret';
                    }
                } else {
                    echo 'Email or password incoret';
                }

            } else {
                echo "Enter a valid Email";
            }
        } else {
            echo "email or password are too short";
        }
    }
}
