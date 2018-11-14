<?php
/*time.php
Returns server time in response to an AJAX request
*/
date_default_timezone_set('America/New_York');
$date = date("l, F jS");
$time = date('g:ia');
echo "It's $date.<br>
     Our time is $time.";
?>
