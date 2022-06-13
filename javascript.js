const add = function(a,b) {
  return +a + +b;
};
const subtract = function(a,b) {
	return +a - +b;
};
const multiply = function(a,b) {
  return +a * +b;
};
const divide = function(a,b) {
  return +a / +b;
};
const operate = function(o,a,b) {
  if (o == `+`) return add(a,b);
  if (o == `-`) return subtract(a,b);
  if (o == `*`) return multiply(a,b);
  if (o == `/`) return divide(a,b);
}

const numDown = function(e) {
  console.log(e);
  currentOperand += e.target.textContent; 
  displayStr += e.target.textContent;
  const display = document.querySelector(`#display`);
  display.textContent = displayStr;
}

const opDown = function(e) {
  console.log(e);
  if (firstOperand == ``) {firstOperand = currentOperand;}
  else {secondOperand = currentOperand;}
  currentOperand = ``;
  if (currentOperator !== ``) {
    const currentAnswer = operate(currentOperator,firstOperand,secondOperand);
    firstOperand = currentAnswer;
    displayStr = currentAnswer;
  }
  if (firstOperand !== ``) {currentOperator = e.target.textContent;}
  else currentOperand += e.target.textContent;
  displayStr += e.target.textContent;
  const display = document.querySelector(`#display`);
  display.textContent = displayStr;
}

let displayStr = ``;
let currentOperand = ``;
let currentOperator = ``;
let firstOperand = ``;
let secondOperand = ``;

const numbers = document.querySelectorAll(`.number`);
numbers.forEach(num => {
  num.addEventListener(`click`,numDown); 
});
const operators = document.querySelectorAll(`.operator`);
operators.forEach(op => {
  op.addEventListener(`click`,opDown);  
});