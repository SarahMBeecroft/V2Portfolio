<?php

  if (isset($_POST['submit'])) {
    $name = trim($_POST['name'];
    $mailFrom = trim($_POST['email'];
    $message = trim($_POST['message'];

    $emailTo = 'smblair87@gmail.com'; 
    if (empty($subject)) {
        $subject = 'Message from your Portfolio';
    }

    $body = "Name: $name \n\nEmail: $email \n\nMessage:\n$message";
    $headers = "From: ".$mailFrom."\r\n" .
          'Reply-To: '.$email."\r\n";
    

    mail($emailTo, $subject, $message, $headers);
    header("Location: index.php?mailsend");

 
  }
  
?>