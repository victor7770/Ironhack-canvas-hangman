let hangman;

class Hangman {
  constructor() {
    this.words = ['BANK', 'DOLL', 'GOD'],
      this.secretWord = this.getWord(),
      this.letters = [],
      this.guessedLetter = '',
      this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * (this.words.length))];

  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true;
    }
    else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)){
      return false;
    } 
    return true;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
		this.letters.push(this.secretWord[i]);
  }

  addWrongLetter(letter) {
    this.letters.push(letter.toUpperCase());
    this.errorsLeft--;
  }

  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  checkWinner() {
    var x = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      for (let j = 0; j < this.guessedLetter.length; j++) {
        if (this.secretWord.charAt(i) == this.guessedLetter.charAt(j)) {
          x++
        }
      }
    }
    if (x == this.secretWord.length) {
      return true;
    }
    else {
      return false;
    }
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => { 
  if (hangman.checkIfLetter(e.keyCode)) {
    let letter = String.fromCharCode(e.keyCode).toUpperCase();
    if (hangman.checkClickedLetters(letter)) {
      let intheWord = false;
      for (let i = 0; i < hangman.secretWord.length; i++) {
        if (letter === hangman.secretWord[i]) {
          hangman.addCorrectLetter(i);
          hangmanCanvas.writeCorrectLetter(i, letter);
          intheWord = true;
          if (hangman.checkWinner()) {
            hangmanCanvas.winner();
          };
        }
      }
      if (!intheWord) {
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        };
      }
    }
  }
};
