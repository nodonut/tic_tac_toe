const gridBoxes = document.querySelectorAll('.grid-box');

const playerFactory = (name, choice, moveset) => {
  return { name, choice, moveset };
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
        trackMoves(player);
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
    console.log(playerCross);
  },
  { once: true }
);

circleChoice.addEventListener(
  'click',
  () => {
    const playerCircle = playerFactory('circle', 'O', {});
    displayController(playerCircle);

    console.log(playerCircle);
  },
  { once: true }
);

function trackMoves(player) {
  if (player.moveset.length >= 3) {
    console.log(player.moveset);
  }
}
