
let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueElement = document.getElementById('value');

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1; 
  valueElement.textContent = counterValue; 
});