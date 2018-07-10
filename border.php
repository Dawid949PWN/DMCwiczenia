<?php
	$format ="margin:40px; margin-top: 50px; font-size: 25px;";	
	$border = "background-color: #0036d0; color: #fdff4a;";
?>
	<?php
	
	print "<body style='$format'>";
	$edit = 'font-size:20px; font-style: italic';
	$wiersz ="<p style='$edit'>Ćwiczenia Kolumny oraz Wierszy (6, 10) : </p> <br> <br>";
	print "$wiersz";
		
	print "<table border='1'>";
	print "<tr><td>Dane</td><td>Dane</td></tr>";
	print "<tr><td>Dane</td><td>Dane</td></tr>";
	print "<tr><td>Dane</td><td>Dane</td></tr>";
	print "</table>";
	print '<br>' . '<br>';
	print "<table style='$border' border='1'>";
	for ($wiersz = 1; $wiersz <= 10; $wiersz++){
		print "<tr>";
	for ($columny = 1; $columny <= 6; $columny++){
		print "<td>Dane $columny</td>";
	}
		print "</tr>";
	}
	print "</table>";
	print "</body>";
?>

		
		