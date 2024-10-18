
const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {

  if (inputElement.value === '') {
    outputElement.textContent = 'Anonymous';
  } else {
    outputElement.textContent = inputElement.value;
  }
});
