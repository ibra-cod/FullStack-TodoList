<?php

require '../database/Database.php';

require '../../public/bootstrap.php';

$pdo = getPDO();

       if(is_post()) {
        if (isset($_POST['submit'])) {
           $fullName = is_valid($_POST['fullName']);
           $username = is_valid($_POST['username']);
           $email = is_valid($_POST['email']);
           $pass = is_valid($_POST['password']);

          
            if (strlen($username) > 1 && strlen($email) > 1 && strlen($pass) >  4) {
                if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $request = $pdo->prepare('SELECT * FROM `users` WHERE email = :email');
                    $request->execute
                                (
                                    [
                                        'email' => $email 
                                    ]
                                );

                    $count = $request->rowCount();


                    if ($count > 0) {
                       echo 'already exist';
                    } else {
                        $insertRequest = 
                        $pdo->
                            prepare('INSERT INTO `users` (fullname,username, email, password)
                                        VALUES (?,?,?,?)');
                        
                        $insertRequest->bindValue(1, $fullName, PDO::PARAM_STR);
                        $insertRequest->bindValue(2, $username, PDO::PARAM_STR);
                        $insertRequest->bindValue(3, $email, PDO::PARAM_STR);
                        $insertRequest->bindValue(4, password_hash($pass, PASSWORD_ARGON2ID), PDO::PARAM_STR);
                      
                        $insertRequest->execute();

                        header('Location: ../public/login.php');
                        
                    }

                    
                    



                    




                }
            }
        }



    }
