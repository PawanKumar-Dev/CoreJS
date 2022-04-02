// Switch Statements: It's used in decision making just like if-else
// It evaluates an expression and executes the corresponding body that matches the expression's result.
// "break" makes sure we exit once our code is executed. If not then all case will be executed one by one 

// Simple Calculater with Switch Stmt
let result;
let operator = prompt("Choose Operator + , - , * , /  ?");

let number1 = Number(prompt("Enter Frist Number "));
let number2 = Number(prompt("Enter Second Number "));

switch (operator) {
  case '+':
    result = number1 + number2;
    break;

  case '-':
    result = number1 - number2;
    break;

  case '*':
    result = number1 * number2;
    break;

  case '/':
    result = number1 / number2;
    break;

  default:
    result = "Operator not recognised!"
    break;
}

console.log(result);