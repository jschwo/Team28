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
  'UPDATE Member SET firstName=?, lastName=?, street=?, city=?, state=?, zip=?,
   phoneNum1=?, phoneNum2=?, phoneNum3=?, dob=?, gender=?, startDate=?, position=?, radioNumber=?, stationNumber=?, isActive=?, email=? WHERE memberID=?'
);

$stmt->execute([

  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip'],
  $_POST['phoneNum1'],
  $_POST['phoneNum2'],
  $_POST['phoneNum3'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['startDate'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['email'],
  $_POST['memberID']

]);


header('HTTP/1.1 303 See Other');
header('Location: ../members/');
