const gridBoxes = document.querySelectorAll('.grid-box');

const playerFactory = (name, choice, moveset) => {
  return { name, choice, moveset };
};

const checkMove = player => {
  if (player.choice == 'X') {
  }
};

const gameFlow = (player1, player2) => {
  if (player1.moveset.length < 0) {
    alert('Player 1 start');
  }
};

const displayController = player => {
  const crossBox = document.createElement('span');
  gridBoxes.forEach(box => {
    box.addEventListener(
      'click',
      e => {
        if (player.choice == 'X') {
          e.target.classList += ' fa fa-times';
          console.log(e.target.id);

          const boxId = e.target.id;
          player.moveset[boxId] = 'X';
        }
      },
      { once: false }
    );
  });
};

const crossChoice = document.querySelector('.cross');
const circleChoice = document.querySelector('.circle');

crossChoice.addEventListener(
  'click',
  () => {
    const playerCross = playerFactory('cross', 'X', {});
    displayController(playerCross);
    trackMoves(playerCross);

    console.log(playerCross);
  },
  { once: true }
);

circleChoice.addEventListener(
  'click',
  () => {
    const playerCircle = playerFactory('circle', 'O', {});
    displayController(playerCircle);
    trackMoves(playerCircle);

    console.log(playerCircle);
  },
  { once: true }
);

function trackMoves(player) {
  for (i = 0; i <= 3; i++) {
    console.log(Object.keys(player.moveset));
  }
}
