$(document).ready();

var Sumcards = new Array(14)
var nextpicture = new Image(70, 120);
var nextcard = 1;

//porównywanie do line..

function numberline(a, b) {return a - b;}

function Gamestar() {
    if (!document.getElementById)
    return;

    status = document.getElementById("status");
    status = innerHTML = "Next Card";
    nextcard = 1;

    // dodatek do tablicy....

    tables = new Array(26);
    for (i = 1; i < 26; i++) {
        tables[i] = new Card(0, "x");
        objectum = document.getElementById("card" + i);
        objectum.src = "./blank.png";
        objectum.onclick = Localcard;
    }

    // karty doładowanie (naraze pokoleji).....

    deck = new Array(83);
    for (i = 1; i < 14; i++) {

        deck[i] = new Card(i, "c");
        deck[i + 13] = new Card(i, "h");
        deck[i + 26] = new Card(i, "s");
        deck[i + 39] = new Card(i, "d");   
    }

    //skasowanie wynika....

    Score();

    //mieszanie karte.... zastosowanie Math.random

    n = Math.floor(52 * Math.random() + 200);
    for (i = 1; i < n; i++) {
        c1 = Math.floor(52 * Math.random() + 1);
        c2 = Math.floor(52 * Math.random() + 1);
        temp = deck[c2];
        deck[c2] = deck[c1];
        deck[c1] = temp;
    }

    // pierszego karty pojawienia na ekranu......

    next = document.getElementById("dcard");
    next.src = deck[nextcard].fname();
    nextpicture.src = deck[nextcard + 1].fname();
    objectum = document.getElementById("newgame")
    objectum.onclick = Gamestar;
}
// nastepne krok....

function Localcard(y) {
    if (!y)
        var y = window.event;
    thiscard = (y.target) ? y.target : y.srcElement;
    pos = thiscard.id.substring(4);

    if (tables[pos].color != "x") {
        return;
    }

    drawcard = document.getElementById("dcard");
    thiscard.src = deck[nextcard].fname();
    drawcard.src = "./blank.png";
    tables[pos] = deck[nextcard];
    nextcard++;
    Score();

    // Koniec zabawe....

    if (nextcard > 25) {
        Gameover();
    } else {
        drawcard.src = deck[nextcard].fname();
        nextpicture = new Image(70, 120);
        nextpicture.src = deck[nextcard + 1].fname();
    }
}
function Score() {

    score = document.getElementById("totalscore");
    totscore = 0;

    for (x = 0; x < 5; x++) {
        r = x * 5 + 1;
        a = AddScore(tables[r], tables[r + 1], tables[r + 2], tables[r + 3], tables[r + 4], "row" + x);
        totscore += a;
    }
    for (x = 0; x < 5; x++) {
        r = x + 1;
        a = AddScore(tables[r], tables[r + 5], tables[r + 10], tables[r + 15], tables[r + 20], "col" + x);
        totscore += a;
    }
    a = AddScore(tables[5], tables[9], tables[13], tables[17], tables[21], "diag1")
    totscore += a;
    a = AddScore(tables[1], tables[7], tables[13], tables[19], tables[25], "diag2")
    totscore += a;
    score.firstChild.nodeValue = totscore;
}
// wyszukiwanie punktów..............

function AddScore(c1, c2, c3, c4, c5, scorebox) {
    objectum = document.getElementById(scorebox);
            straight = false;
            flush = false;
            royal = false;
            three = false;
            pairs = 0;
            
    numbs = new Array(5);
            numbs[0] = c1.number;
            numbs[1] = c2.number;
            numbs[2] = c3.number;
            numbs[3] = c4.number;
            numbs[4] = c5.number;
            numbs.sort(numberline);
    
    // Zasady poker kart: //
    
    //flös
    if (c1.color == c2.color && c2.color == c3.color
            && c3.color == c4.color && c4.color == c5.color) {
        flush = true;
    }
    
    //line
    if (numbs[4] - numbs[3] == 1
            && numbs[3] - numbs[2] == 1
            && numbs[2] - numbs[1] == 1
            && numbs[1] - numbs[0] == 1) {
        straight = true;
    }
    
    if (c1.number == 0 || c2.number == 0 || c3.number == 0
            || c4.number == 0 || c5.number == 0) {
        objectum.innerHTML = "";
        return 0;
    }
  
    // pokoleji kolory (10, J, K, Q, A)
    if (numbs[1] == 10 && numbs[2] == 11 && numbs[3] == 12
            && numbs[4] == 13 && numbs[0] == 1) {
        royal = true;
        straight = true;
    }

    // royal flös, flös,
    if (straight && flush && royal) {
        objectum.innerHTML = "<p>ROYAL FLUSH<br>250</p>";
        return 250;
    }
    if (straight && flush) {
        objectum.innerHTML = "<p>STRAIGHT FLUSH<br>50</p>";
        return 50;
    }
    if (straight) {
        objectum.innerHTML = "<p>STRAIGHT<br>4</p>";
        return 4;
    }

    if (flush) {
        objectum.innerHTML = "<p>FLUSH<br>5</p>"
        return 5;
    }

    for (i = 1; i < 14; i++) {
        Sumcards[i] = 0;
    }

    for (i = 0; i < 5; i++) {
        Sumcards[numbs[i]] += 1;
    }

    for (i = 1; i < 14; i++) {

        //poker
        if (Sumcards[i] == 4) {
            objectum.innerHTML = "<p>FOUR OF A KIND<br>25</p>";
            return 25;
        }
        if (Sumcards[i] == 3)
            three = true;

        if (Sumcards[i] == 2)
            pairs += 1;
    }

    // full house
    if (three && pairs == 1) {
        objectum.innerHTML = "<p>FULL HOUSE<br>10</p>";
        return 10;
    }
    // dwa pary
    if (pairs == 2) {
        objectum.innerHTML = "<p>TWO PAIR<br>2</p>";
        return 4;
    }
    //drill
    if (three) {
        objectum.innerHTML = "<p>DRILL<br>1</p>";
        return 6;
    }
    //jedna para
    if (pairs == 1) {
        objectum.innerHTML = "<p>PAIR<br>1</p>";
        return 2;
    }

    // 0 punktów (0 score)
    objectum.innerHTML = "<p>NO SCORE<br>0</p>";
    return 0;

    //Addscore () koniec.....           
}

//Koniec zabawy : pokazywanie wyników...

    var showtime = 100;
        var showtime2 = 2000; 

function Gameover() {
  
    stat = document.getElementById("status")

    $("#totalscore").css("color", "#fdff6c");
    $("#totalscore").css("fontSize", "24px");
    $("#totalscore").animate({"opacity": 0}, showtime);
    $("#totalscore").animate({"opacity": 1}, showtime2);
    
}

function fname() {
    return this.number + this.color + ".png";
}
function Card(number, color) {
    this.number = number;
    this.color = color;
    this.fname = fname;
}

//  Rozpoczecia Gry...

window.onload = Gamestar;






