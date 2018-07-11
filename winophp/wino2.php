<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>Wino</title>
        <meta charset="Utf8">
		<meta name="content" language="Polish">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="style.css" rel="stylesheet" type="text/css">
        
    </head>
	<!-- Prezentacja ćwiczenia2 -->
    <body style="background-image:url(backg.png); text-align: center; background-size:100%; background-repeat: no-repeat; margin:0; heigth:100%; width:100%">

        <p style="margin-top: 25px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ex ac turpis egestas rhoncus eu ac leo. Morbi libero velit, consequat ornare ullamcorper quis,</p>
        <p> tristique eget est. Sed ut ex varius, iaculis erat <br>
         tristique eget est. Sed ut ex varius, iaculis erat ut, pulvinar elit.</p>
		 
		 <img style="width:300px; border: 1px solid lightgray;" src="img/wino4.png" alt="wino4">
		
	 <?php
	 
		$formtd = 'padding: 5px;';
	 
		print "<h2 style='color:green;'>Wiadomość zostało wysyłane</h2>";
	 
		$imie = $_POST['imie'];
		$email = $_POST['email'];
		$typ = $_POST['typ'];
		$wiadomosc = $_POST['wiadomosc'];
		
		print "<table style='margin-top: 20px; padding:20px; text-align:center; border-color: lightgray; background-color: #ffff;' align='center' border='1'>";
		
		print "<tr><td style='$formtd'>Imie</td> <td> $imie</td></tr>";
		print "<tr><td style='$formtd'>Email</td><td> $email</td></tr>";

		print  "<tr><td style='$formtd'>Tytuł</td><td> $typ </td><tr>";
		print  "<tr><td style='$formtd'>Wiadomość</td><td> $wiadomosc</td></tr> ";

		print "</table>";
	 ?>
	 
	 <div style="margin-top: 15px;"> em ipsum dolor sit amet, consectetur adipiscing elit. Nam non ex ac turpis egestas rhoncus <br> eu ac leo. Morbi libero velit, consequat ornare ulla.
		
        <footer id="kont">
            <p>2018 - Dawid</p>
        </footer>
    </body>
</html>
