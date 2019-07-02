
        var words = ["rabbit", "snail", "airport", "carrots", "river"];
        var wins = 0;
        var losses = 0;
        var wrongLetter = [];
        var guessesLeft = 10;
        var underScores = [];
        var userGuesses = [];
        var ranWord;
        var winCounter = 0;
        var letters = [];

        function startGame() {

            ranWord = words[Math.floor(Math.random() * words.length)];

            console.log('Random Word: ' + ranWord);

            for (var i = 0; i < ranWord.length; i++) {

                underScores.push('_');

            }
            // Printing Underscores

            document.getElementById('answerText').innerHTML = underScores.join(" ");

            letters = [ranWord.length];

            //reset
            wrongLetter = [];
            guessesLeft = 10;
            wins = 0;
            losses = 0;

            document.getElementById('guesses-left').textContent = guessesLeft;
            document.getElementById('wins-text').textContent = wins;
            document.getElementById('losses-text').textContent = losses;
            document.getElementById('incorrect-guesses').textContent = wrongLetter;


        }

        function winLose() {

            var guessedWord = letters.join("");

            if (guessedWord === ranWord) {
                
                wins++;
                document.getElementById('wins-text').innerHTML = wins;
                alert("Winner");
                softReset()

            }

            else if (guessesLeft === 0) {

                alert("Loser");
                losses++;
                document.getElementById('losses-text').innerHTML = losses;
                softReset()

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
                        winCounter++;
                        winLose();


                    }


                }
            }
            else {

                wrongLetter.push(userGuesses);
                guessesLeft--;
                document.getElementById('guesses-left').innerHTML = guessesLeft;
                document.getElementById('incorrect-guesses').textContent = wrongLetter;
                winLose();

            }
        }

        function reset() {
            letters = [ranWord.length];
            wrongLetter = [];
            guessesLeft = 10;
            wins = 0;
            losses = 0;
            for (var i = 0; i < ranWord.length; i++) {

                underScores.push('_');

            }
            // Printing Underscores

            document.getElementById('answerText').innerHTML = underScores.join(" ");

        }

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



        startGame();