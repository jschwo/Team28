<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'DELETE FROM Member WHERE memberID=?'
);

$stmt->execute([

  $_POST['memberID']

]);

$pk = $db->lastInsertId();


header('HTTP/1.1 303 See Other');
header('Location: ../members/');
