<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n subject: $subject \n Message: $message";
$recipient = "randallerasmus1@gmail.com";
$subject = "Add Your Subject Here";
$mailheader = "From: $randallerasmus1@gmail.com \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: contact.html")
?>

