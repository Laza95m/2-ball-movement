const ball = document.querySelector('#ball');

let coordsUpDown = 0;
let coordsLeftRight = 0;

window.addEventListener('keydown', (e) => {
  // координаты тега body
  const bodyCoords = document.body.getBoundingClientRect();

  if (e.key === 'ArrowUp' && coordsUpDown > 0) {
    coordsUpDown -= 50;
    ball.style.top = `${coordsUpDown}px`;
  }

  if (
    e.key === 'ArrowDown' &&
    coordsUpDown < bodyCoords.height - ball.clientHeight - 50
  ) {
    coordsUpDown += 50;
    ball.style.top = `${coordsUpDown}px`;
  }

  if (e.key === 'ArrowLeft' && coordsLeftRight > 0) {
    coordsLeftRight -= 50;
    ball.style.left = `${coordsLeftRight}px`;
  }

  if (
    e.key === 'ArrowRight' &&
    coordsLeftRight < bodyCoords.width - ball.clientWidth - 50
  ) {
    coordsLeftRight += 50;
    ball.style.left = `${coordsLeftRight}px`;
  }

  if (e.key === 'Escape') {
    coordsUpDown = 0;
    coordsLeftRight = 0;
    ball.style.top = `${coordsUpDown}`;
    ball.style.left = `${coordsLeftRight}`;
  }
});
