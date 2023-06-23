let input = document.getElementById('input');

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  let expression = input.value;

  // Remove leading zeros
  expression = expression.replace(/^0+/, '');

  // Validate the expression
  if (/[^0-9+\-*/.]/.test(expression)) {
    input.value = 'Error';
    return;
  }

  // Split the expression into operands and operators
  let operands = expression.match(/[0-9.]+/g);
  let operators = expression.match(/[\+\-\*\/]/g);

  // Calculate the result
  let result = parseFloat(operands[0]);
  for (let i = 0; i < operators.length; i++) {
    let operand = parseFloat(operands[i + 1]);
    switch (operators[i]) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
    }
  }

  // Display the result
  input.value = result;
}
