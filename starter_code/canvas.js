
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.font = "50px sans-serif";
    this.widthLines = 40;
    this.countErrors = 0;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 8000, 12000);
  }

  drawLines() {
    let gap = 0;
    console.log(hangman.secretWord);
    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.ctx.fillRect(400 + (this.widthLines * (i + 1) + gap), 500, 40, 2);
      gap += 10;
    }
  }

  writeCorrectLetter(index, texto) {
    let gap = index * 10;
    this.ctx.fillText(texto, 400 + (this.widthLines * (index + 1) + gap), 480, 40);
  }

  writeWrongLetter(letter, errorsLeft) {
    if (hangman.errorsLeft >= 0) {
      this.countErrors++;
      this.ctx.fillText(letter, 600 + (50 * this.countErrors), 200);
    }
  }
  drawHangman(errorsLeft) {
    if (errorsLeft === 10) {
      this.ctx.fillRect(125, 500, 250, 10);

    } else if (errorsLeft === 9) {
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.fillRect(250, 50, 10, 450);
    } else if (errorsLeft === 8) {
      this.ctx.fillRect(250, 50, 120, 10);
    } else if (errorsLeft === 7) {
      this.ctx.fillRect(360, 50, 10, 40);
    } else if (errorsLeft === 6) {
      let radians = (Math.PI / 180) * 360;
      this.ctx.beginPath();
      this.ctx.arc(365, 140, 50, 0, radians);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (errorsLeft === 5) {
      this.ctx.fillRect(360, 190, 10, 150);
    } else if (errorsLeft === 4) {
      this.ctx.beginPath();
      this.ctx.moveTo(365, 340);
      this.ctx.lineTo(300, 400);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (errorsLeft === 3) {
      this.ctx.beginPath();
      this.ctx.moveTo(365, 340);
      this.ctx.lineTo(430, 400);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();    
    } else if (errorsLeft === 2) {
      this.ctx.beginPath();
      this.ctx.moveTo(365, 230);
      this.ctx.lineTo(430, 170);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (errorsLeft === 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(365, 230);
      this.ctx.lineTo(300, 170);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
  gameOver() {
    document.getElementById("loser").className += " visible";
  }

  winner() {
    document.getElementById("winner").className += " visible";
  }
}

