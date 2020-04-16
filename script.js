const container = document.querySelector('#container');
const customizeBtn = document.querySelector('#custom');
const clearBtn = document.querySelector('#clear');
const gridSize = 16;
const root = document.documentElement;

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('square-full');
  });
});

clearBtn.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.classList.remove('square-full');
  });
});

customizeBtn.addEventListener('click', () => {
  container.innerHTML = '';
  let userChoise = prompt('type grid size eg. 64 = 64x64 grid');
  root.style.setProperty('--grid-size', userChoise);
  createGrid(userChoise);
});

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-full');
      square.style.background = randomColor();
    });
  });
}

createGrid(gridSize);

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
