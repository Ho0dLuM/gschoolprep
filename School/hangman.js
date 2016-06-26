var pickWord = function () {
  var word = ["galvanize", "javascript", "function", "variable",
               "array", "console", "return", "boolean"]
  var word = word [Math.floor(Math.random() * word.length)];
  return word;
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  alert("Press enter to continue " + " \n" + answerArray.join(" "));

}

var getGuess = function () {
  return prompt("Guess one letter")
}

var updateGameState = function (guess, word, answerArray) {
  var match = 0;
  for (var j = 0; j < word.length; j++) {
    if(word[j] === guess) {
      answerArray[j] = guess;
      match++;
    }
  }
  return match;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  alert("Press enter to continue " + " \n" + answerArray.join(" "));
  alert("Good work! You got the answer! " + word);
};

var word = pickWord ();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
console.log(word, answerArray, remainingLetters);

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1){
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    console.log(remainingLetters);
    console.log(correctGuesses);
  }
}

showAnswerAndCongratulatePlayer(answerArray);
