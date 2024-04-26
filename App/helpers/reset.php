<?php 


$pdo = getPDO();
$sql = $pdo->prepare('DROP TABLE users IF EXISTS');
$sql->execute() ;


$request = $pdo->prepare('CREATE todos IF NOT EXISTS (
	
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    todoName  VARCHAR(255) NOT NULL,
    folderName Varchar(255) NOT NULL,
    todoDescription VARCHAR(255) NOT NULL,
    todoStatuts VARCHAR(100) NOT NULL,
    todoSubstack Varchar(255) NOT NULL

)');
$request->execute() ;

// use TODO IF NOT NULL;

// use TODO;

// CREATE TABLE IF NOT EXISTS todos (
	
//     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     todoName  VARCHAR(255) NOT NULL,
//     folderName Varchar(255) NOT NULL,
//     todoDescription VARCHAR(255) NOT NULL,
//     todoStatuts VARCHAR(100) NOT NULL,
//     todoSubstack Varchar(255) NOT NULL,
//     userId INT NOT NULL,
//     FOREIGN KEY (userID) REFERENCES users(id)

// );


// INSERT INTO `todos` (`id`, `todoName`, `folderName`, `todoDescription`, `todoStatuts`, `todoSubstack`, `userId`) VALUES ('1', 'faire a manger', 'food', 'faire à manger pour ce cice ce la ...', 'DOING', 'add this, add add that.', '74');

