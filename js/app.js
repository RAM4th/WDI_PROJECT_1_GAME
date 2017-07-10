console.log('loaded');
// ---------- PSEUDO CODE-------------

// 1. Wait for player to click start
// 2. Start a round, which follows these steps
// 3. Add a random number (1-4) to the sequence
// 4. Animate the sequence to the user
// 5. Enable user interaction with the board, and register any clicks on the Simon tiles
// 6. While the player has not entered an incorrect response, and the number of clicks is less than the length of the sequence, wait for player input
// 7. Continue adding rounds until the player loses

// -----------RESOURCES----------------

// https://codepen.io/BenLBlood/pen/LGLEoJ
// https://codeplanet.io/building-simon-says-javascript/

function newRound() {
  var sequence = [1,2,1]; //red, green, red
  animate(sequence);
}

function animate(sequence) {
  var i = 0;
  var interval = setInterval(function() {
    lightUp(sequence[i]);

    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
    }
  }, 600);
}
function lightup(tile) {
  var $tile = $('[data-tile=' + tile + ']').addClass('lit');
  window.setTimeout(function() {
    $tile.removeClass('lit');
  }, 300);

}
