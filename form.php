<?php


$errors = [];
$errorMessage = '';
$successMessage = '';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']).'\r\n';
    $subject = sanitizeInput($_POST['subject']);
    $message1 = sanitizeInput($_POST['message']);
    $message = $email.$message1;
  if (empty($name)) {
    $errors[] = 'Name is empty';
  }
  if (empty($email)) {
    $errors[] = 'Email is empty';
  }  else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
  }
  if (empty($message)) {
    $errors[] = 'Message is empty';
  }
    echo "hi";

}

function sanitizeInput($input) {
   $input = trim($input);
   $input = stripslashes($input);
   $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
   return $input;
}

?>

