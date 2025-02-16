// Write a calculator program by using "prompt" function

function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let operator = prompt("Enter the operator (+, -, *, /):");
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: Both inputs must be valid numbers.");
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Cannot divide by zero!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator!";
      break;
  }

  alert("The result is: " + result);
}

calculator();
