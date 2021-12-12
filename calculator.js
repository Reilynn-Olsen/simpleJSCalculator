addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNumber = parseInt(document.getElementById('first-number').value, 10);
    const secondNumber = parseInt(document.getElementById('second-number').value, 10);
    const operation = document.getElementById('operator').value
    const result = document.getElementById('result')

    if (operation === '+'){
      result.innerHTML = firstNumber + secondNumber;
    } else if ( operation === '*') {
      result.innerHTML = firstNumber * secondNumber;
    } else if ( operation === '-') {
      result.innerHTML = firstNumber - secondNumber;
    }
    else if ( operation === '/') {
      result.innerHTML = firstNumber / secondNumber;
    }
  });
});