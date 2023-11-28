'use strict';

// DOM selection
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// DOM Click Event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let audio = new Audio('./audio/winSound.mp3');
let audioBG = new Audio('./audio/meo.mp3');
let highscore = 0;

// // Play background music
// audioBG.volume = 0.5;
// audioBG.currentTime = 0;
audioBG.play();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.sound').addEventListener('click', function () {
  if (audioBG.paused) {
    audioBG.volume = 0.5;
    audioBG.currentTime = 0;
    audioBG.play();
  } else {
    audioBG.pause();
  }
});

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.score').textContent = score;
    if (
      document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0,0.2), rgba(0, 0, 0,0.5)), url("./img/win.jpg")';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // When player wins, play sound effect
    audioBG.pause();
    audio.currentTime = 0;
    audio.play();
    document.querySelector('.status').textContent = 'Congratulation!';
    document.querySelector('.img-status').src = './img/correct.gif';
    document.querySelector('.img-status').style.display = 'block';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (document.querySelector('.score').textContent <= 1) {
      audioBG.pause();
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.status').textContent = 'Game Over!';
      document.querySelector('.img-status').src = './img/gameover.png';
      document.querySelector('.number').textContent = secretNumber;
    } else {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      if (guess > 20 || guess <= 0) {
        // document.querySelector('.message').textContent = 'Out of range! Must be between 1 and 20 ';
        displayMessage('Out of range! Must be between 1 and 20 ');
      } else if (guess > secretNumber) {
        // document.querySelector('.message').textContent = '📈 Too High!';
        displayMessage('📈 Too High!');
      } else if (guess < secretNumber) {
        // document.querySelector('.message').textContent = '📉 Too Low!';
        displayMessage('📉 Too Low!');
      }
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.status').textContent = 'Wrong!';
      document.querySelector('.img-status').src = './img/wrong.png';
      document.querySelector('.img-status').style.display = 'block';
    }
  }
  //  NOT DRY
  // } else if (guess > secretNumber) {
  //   if (document.querySelector('.score').textContent <= 1) {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.status').textContent = 'Game Over!';
  //     document.querySelector('.img-status').src = './img/gameover.png';
  //   } else {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.status').textContent = 'Wrong!';
  //     document.querySelector('.img-status').src = './img/wrong.png';
  //     document.querySelector('.img-status').style.display = 'block';
  //   }
  // } else if (guess < secretNumber) {
  //   if (document.querySelector('.score').textContent <= 1) {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.status').textContent = 'Game Over!';
  //     document.querySelector('.img-status').src = './img/gameover.png';
  //   } else {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.status').textContent = 'Wrong!';
  //     document.querySelector('.img-status').src = './img/wrong.png';
  //     document.querySelector('.img-status').style.display = 'block';
  //   }
  //}
});

document.querySelector('.again').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.status').textContent = 'Status';
  document.querySelector('.img-status').style.display = 'none';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(rgba(35, 33, 33, 0.484), rgb(23, 22, 22)), url("./img/meo.jpg")';
  //  Stop sound effect
  audio.pause();
  //  Play background music
  audioBG.volume = 0.5;
  audioBG.currentTime = 0;
  audioBG.play();
});
