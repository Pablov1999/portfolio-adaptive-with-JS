<?php
$to = "pasha_viarenich@mail.ru";
$from = trim($_POST['email']);

$message = htmlspecialchars($_POST['message']);
$message = urldecode($message);
$message = trim($message);

$subject = $_POST['email'];

$phone = $_POST['phone'];

if(mail($to, $message, $subject, $phone)){
    echo 'Письмо отправлено';
}else{
    echo 'Письмо не отправлено';
}

?>