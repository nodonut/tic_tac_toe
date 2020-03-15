const gridBoxes = document.querySelectorAll('.grid-box');

const playerFactory = (name, choice, moveset) => {
  return { name, choice, moveset };
};

const displayController = player => {
  gridBoxes.forEach(box => {
    box.addEventListener(
      'click',
      e => {
        if (player.choice == 'X') {
          e.target.classList += ' fa fa-times';
        } else {
          e.target.classList += ' fa fa-circle';
        }
      },
      { once: true }
    );
  });
};

const crossChoice = document.querySelector('.cross');
const circleChoice = document.querySelector('.circle');

crossChoice.addEventListener('click', () => {
  const playerCross = playerFactory('cross', 'X', []);
  displayController(playerCross);
  console.log(playerCross);
});

circleChoice.addEventListener('click', () => {
  const playerCircle = playerFactory('circle', 'O', []);
  displayController(playerCircle);

  console.log(playerCircle);
});
