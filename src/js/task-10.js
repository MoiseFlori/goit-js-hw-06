
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');


function createBoxes(amount) {
  const boxes = []; 
  let size = 30;  

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);

}
createButton.addEventListener('click', () => {
  const amount = input.value;  
  if (amount > 0) {
    createBoxes(amount);  
  }
});


function destroyBoxes() {
  boxesContainer.innerHTML = '';  
}

destroyButton.addEventListener('click', destroyBoxes);  