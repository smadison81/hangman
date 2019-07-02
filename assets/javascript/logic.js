
var words = ["atoms", "homer", "marge", "lisa", "bart", "maggie", "ned", "smithers", "burns", "bumblebee", "krusty", "barney", "moe", "carl", "lenny", "shelbyville", "monorail", "sideshow", "apu", "otto", "skinner", "ralph", "grampa", "santa", "patty", "selma", "troy", "herbert", "helen", "nelson", "krustofsky", "rod"];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var ranWord;
var letters = [];

window.onload = function () {
    document.getElementById("theme").play();
}

function startGame() {

    underScores = [];

    ranWord = words[Math.floor(Math.random() * words.length)];

    console.log('Random Word: ' + ranWord);

    for (var i = 0; i < ranWord.length; i++) {

        underScores.push(' .... ');

    }
    // Printing Underscores

    document.getElementById('answerText').innerHTML = underScores.join(" ");

    letters = [ranWord.length];

    //reset
    wrongLetter = [];
    guessesLeft = 10;
    wins = 0;
    losses = 0;

    document.getElementById("theme").play();
    document.getElementById('guesses-left').textContent = guessesLeft;
    document.getElementById('wins-text').textContent = wins;
    document.getElementById('losses-text').textContent = losses;
    document.getElementById('incorrect-guesses').textContent = wrongLetter;


}


//Wins and Loses Calculations

function winLose() {

    var guessedWord = letters.join("");

    if (guessedWord === ranWord) {

        wins++;
        document.getElementById('wins-text').innerHTML = wins;
        document.getElementById("aye").play();
       slowDown();

    }

    else if (guessesLeft === 0) {

        losses++;
        document.getElementById('losses-text').innerHTML = losses;
        document.getElementById("no").play();
        slowDown();
    }


}




// User Guesses

document.onkeyup = function (event) {

    userGuesses = event.key;

    //Checking if the letter exist inside of the word

    if (ranWord.indexOf(userGuesses) > -1) {

        for (var i = 0; i < ranWord.length; i++) {

            if (ranWord[i] === userGuesses) {
                letters[i] = userGuesses;
                underScores[i] = userGuesses;
                console.log(underScores);
                document.getElementById('answerText').innerHTML = underScores.join(" ");
                document.getElementById("woo").play();
                winLose();
            }


        }
    }
    else {
        if(wrongLetter.indexOf(userGuesses) <= -1){
            wrongLetter.push(userGuesses);
            guessesLeft--;
            document.getElementById("doh").play();
        }
        document.getElementById('guesses-left').innerHTML = guessesLeft;
        document.getElementById('incorrect-guesses').textContent = wrongLetter;
        winLose();

    }
}

// Reset function that doesnt reset the score

function softReset() {
    letters = [ranWord.length];
    ranWord = words[Math.floor(Math.random() * words.length)];
    wrongLetter = [];
    guessesLeft = 10;
    document.getElementById('guesses-left').textContent = guessesLeft;
    console.log('Random Word: ' + ranWord);
    underScores = [];
    for (var i = 0; i < ranWord.length; i++) {
        underScores.push('_');

    }
    // Printing Underscores

    document.getElementById('incorrect-guesses').textContent = wrongLetter;
    document.getElementById('answerText').innerHTML = underScores.join(" ");


}

function slowDown() {
    myVar = setTimeout(function(){ softReset() }, 1000);
  }


startGame();