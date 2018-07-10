<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Klocki rzut</title>
    </head>
    <body style="background-image: url('klocki.png'); color:#ffff; background-attachment: fixed;">
	
	<?php
        $rzut = rand(1, 6);
		
        print '<br>Wynik rzutu: ' . $rzut;
        print '<br>Wynik rzutu: $rzut';
        print "<br>Wynik rzutu: $rzut";
        print "<br>Wynik rzutu: \"$rzut\"";
        $rzut = rand(1, 6);
        print "<br>Wynik rzutu: $rzut ";
		
        if ($rzut % 2 == 0) { 
            print 'wszystkie parzyste';
        }
		else
		{
            print 'wszystkie nie parzyste';
        }
        $rzut = rand(1, 6);
        print "<br>Wynik rzutu: $rzut ";
		
		//rzut klocków....
		
		for ($i = 1; $i <= 36; $i++) {
            $rzut = rand(1, 6);
            print "<br>Wynik $i rzutu: $rzut";
        }
		?>
		
	 </body>
</html>		
		
		
		