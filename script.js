const gridBoxes = document.querySelectorAll('.grid-box');

const playerFactory = (name, choice) => {
  return { name, choice };
};

const player1 = playerFactory('ONE', 'X');

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
