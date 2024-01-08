<?php

  /*
    Example usage of the Handle Form Submit library.
  
    IMPORTANT: For security reasons, do not use this code as is.
    This example demonstrates the basic functionality of the library
    and should be further enhanced with input validation, sanitization,
    and protection against SQL injection and other vulnerabilities.
  */
  
  // Database configuration
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "handle_form_submit";

  try {

    // Database connection using PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  } catch(PDOException $e) {

    echo "Connection error: " . $e->getMessage();

  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $email = htmlspecialchars(filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL), ENT_QUOTES, 'UTF-8');
    $password = htmlspecialchars(filter_input(INPUT_POST, 'password', FILTER_SANITIZE_FULL_SPECIAL_CHARS), ENT_QUOTES, 'UTF-8');

    // Query to check if the user exists in the database
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    // Check if the user exists
    if ($stmt->rowCount() > 0) {

      $response = array(
        'success' => true,
        'message' => 'Login successful.'
      );

      echo json_encode($response);
      exit;

    } else {
	  
      $response = array(
        'success' => false,
        'message' => 'Invalid email address or invalid password!'
      );

      echo json_encode($response);
      exit;

    }

  }