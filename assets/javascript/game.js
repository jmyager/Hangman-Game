
// Play audio
var audio = new Audio("assets/sounds/song.mp3")
audio.play();

// Create Array of Words
var wordBank = ["aragorn", "frodo", "gandalf", "legolas", "gimli", "golem", "sauron", "gondor", "rohan", "theshire", "samwise", "merry", "pippin", "sauroman", "balrog", "mordor", "rivendale", "galadriel", "boromir", "bilbo"];

// Choose word randomly
var randNum = Math.floor(Math.random() * wordBank.length);
var chosenWord = wordBank[randNum];
var underScore = [];
var userLetter = "";
var guesses = [];
var guessCounter = 10;
var wins = 0;
var displayedString = "";
console.log(chosenWord);

// Create underscores based on length of word
for (var i = 0; i < chosenWord.length; i++) {
    displayedString += "_ ";
    underScore.push("_");
}
document.getElementById("wordGuess").innerHTML = displayedString;
console.log(underScore);

// Take user input from key press
document.onkeyup = function (event) {

    // If user enters alphabetical key, then run
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var userLetter = event.key.toLowerCase();


    // If users key is within the chosen word, then add it to the displayed array at the appropriate index
    if (chosenWord.indexOf(userLetter) !== -1) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === userLetter) {
                underScore.splice(i, 1, userLetter);
            }
        }
        displayedString = "";
        for (var i = 0; i < underScore.length; i++) {
            displayedString += underScore[i] + " ";
        }
        document.getElementById("wordGuess").innerHTML = displayedString;
        
        // If underScore array does not have any underscores, change variable won to true.
        var won = true;
        for (var i = 0; i < underScore.length; i++) {
            if (underScore[i] === "_") {
                won = false;
            }
        }

        // If variable won is true, increase the win counter by 1, and reset the game
        if (won === true) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            randNum = Math.floor(Math.random() * wordBank.length);
            chosenWord = wordBank[randNum];
            underScore = [];
            guesses = [];
            document.getElementById("guesses").innerHTML = guesses;
            guessCounter = 10;
            displayedString = "";
            for (var i = 0; i < chosenWord.length; i++) {
                displayedString += "_ ";
                underScore.push("_");
            }
            document.getElementById("wordGuess").innerHTML = displayedString;
            document.getElementById("guessCounter").innerHTML = guessCounter;
        }
        console.log(userLetter);
        console.log(underScore);
    }
    // If user's key is not within the chosen word, add it to guesses and decrease the guess counter by 1
    else {
        //Check to see if user's key has already been used.
        if (guesses.indexOf(userLetter) !== -1) {
        }
        else {
            guesses += userLetter + " ";
            guessCounter--;
            document.getElementById("guessCounter").innerHTML = guessCounter;
            document.getElementById("guesses").innerHTML = guesses;
            console.log(guesses);

            // If user runs out of guesses, game is reset without increasing winCounter
            if (guessCounter === 0) {
            randNum = Math.floor(Math.random() * wordBank.length);
            chosenWord = wordBank[randNum];
            underScore = [];
            guesses = [];
            guessCounter = 10;
            displayedString = "";
            for (var i = 0; i < chosenWord.length; i++) {
                displayedString += "_ ";
                underScore.push("_");
            }
            document.getElementById("wordGuess").innerHTML = displayedString;
        }
        }

        
        console.log("false");
        console.log(guesses);
        console.log(guessCounter);
    }
    }
}