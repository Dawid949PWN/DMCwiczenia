<!DOCTYPE html>
<html lang='Pl'>
    <head>
        <meta charset="UTF-8">
        <meta name='content' language='Polish'>
		<title>Rzut Kostką</title>
    </head>
    <body style="background-image: url('kostka.png'); color:#000; background-attachment: fixed; padding:17px;background-size:100%;">
	
		<div>Rzut Kostką (6): </div>
	
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
		
		//rzutów kostką 6 ...
		
		for ($i = 1; $i <= 36; $i++) {
            $rzut = rand(1, 6);
            print "<br>Wynik $i rzutu: $rzut";
        }
		?>
	 </body>
</html>		
		
		
		