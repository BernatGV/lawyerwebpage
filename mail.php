<?php
   // data sent in header are in JSON format
   header('Content-Type: application/json');
   // takes the value from variables and Post the data
   $name = $_POST['name'];
   $email = $_POST['email'];
   $contact = $_POST['contact'];
   $postmessage = $_POST['message'];  
   $to = "infolopezynunezabogados@gmail.com";
   $subject = $_POST['subject'];
   // Email Template
   $message = "<b>Nombre : </b>". $name ."<br>";
   // $message .= "<b>Contact Number : </b>".$contact."<br>";
   $message .= "<b>Correo electrónico : </b>".$email."<br>";
   $message .= "<b>Mensaje : </b>".$postmessage."<br>";


   $header = "From:"+$email+" \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail ($to,$subject,$message,$header);
   // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => 'Mensaje enviado correctamente'
      ));
   }else {
      echo json_encode(array(
         'error'=> true,
         'message' => 'Error al enviar el mensaje'
      ));
   }
?>