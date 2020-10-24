<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Member WHERE memberID = ?';
$vars = [];

if (isset($_GET['memberID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Member WHERE memberID = ?';
  $vars = [ $_GET['memberID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$Member = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($Member, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
