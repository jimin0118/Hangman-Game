var singer = ["aliciakeys", "janetjackson", "adele"];
var randomSinger = singer[Math.floor(Math.random()*singer.length)];
var guessSinger = [];

    for (var i=0; i<randomSinger.length; i++){
    guessSinger[i] = "-";
    }
    var showGuessWord = document.getElementById('guessword');
        showGuessWord.innerHTML= guessSinger.join(" ");


var wrongGuesses = [];


var guessesLeft = 15;
var showRemaining = document.getElementById('remaining');
    showRemaining.innerHTML=guessesLeft;

var wins = 0;
var showNumWins = document.getElementById('numwins');
         showNumWins.innerHTML= + wins;

/*var words = new Array();
    words[0]="adele";
    words[1]="aliciakeys";
    words[2]="janetjackson";

var image = new Array();
    image[0] = '<img scr="https://i.imgur.com/E6hSTeG.jpg" width="275px" height="auto">';
    image[1] = '<img scr="https://i.imgur.com/Jn6ut1i.jpg" width="275px" height="auto">';
    image[2] = '<img scr="https://i.imgur.com/nXdNKv6.jpg" width="275px" height="auto">';
*/

document.onkeyup = function(event) {

    var userGuess = event.key;



    for(var j=0; j<randomSinger.length; j++){

        if(randomSinger[j]===userGuess){
            guessSinger[j]=userGuess;
            }
    }

    if (userGuess !== randomSinger[j]){
            wrongGuesses.push(userGuess);
            guessesLeft --;
            var showWrong = document.getElementById('wrong');
                showWrong.innerHTML=wrongGuesses;
        }


          if(guessSinger.every((v,i)=>v === randomSinger[i])) {
            alert("Congratulations, You Won!\nguessSinger" + guessSinger.join(' '));
            
            wins++;
            document.getElementById("numwins").innerHTML =  + wins;

           /* swap("image[0]"); */

        }

         if(guessesLeft===0){
            alert("You lost, study more singer...\nwrongGuesses" + wrongGuesses.join(' ')); 
        }

        var showGuessWord = document.getElementById('guessword');
        showGuessWord.innerHTML=guessSinger.join(" ");

        var showRemaining = document.getElementById('remaining');
        showRemaining.innerHTML=guessesLeft;

        console.log(randomSinger.length);

}


function changeimage() {
    var image = document.getElementById('hangpic');
    if (image.src.match("img")) {
        for(i = 1; i <= 3; i++) {
            image.src = "https://i.imgur.com/Jn6ut1i"+i+".jpg";
        }
    } else {
        image.src = "https://i.imgur.com/E6hSTeG.jpg";
    }
}