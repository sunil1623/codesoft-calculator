let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = displayValue;
}

function operation(operator) {
  if (operator === '=') {
    displayValue = eval(displayValue);
    document.getElementById('result').value = displayValue;
  } else {
    displayValue += operator;
    document.getElementById('result').value = displayValue;
  }
}

function calculate() {
  displayValue = eval(displayValue);
  document.getElementById('result').value = displayValue;
}
