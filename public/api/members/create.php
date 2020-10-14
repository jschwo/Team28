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
  'INSERT INTO Member (firstName, lastName, street, city, state, zip, phoneNum1, phoneNum2, phoneNum3, dob, gender, startDate, position, radioNumber, stationNumber, isActive)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['newMemFirstName'],
  $_POST['newMemLastName'],
  $_POST['newMemStreet'],
  $_POST['newMemCity'],
  $_POST['newMemState'],
  $_POST['newMemZip'],
  $_POST['newMemMobile'],
  $_POST['newMemHome'],
  $_POST['newMemOther'],
  $_POST['newMemDob'],
  $_POST['newMemGender'],
  $_POST['newMemStartDate'],
  $_POST['newMemMemRadio'],
  $_POST['newMemStation'],
  $_POST['newMemActive']

]);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../visits/');
