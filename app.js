// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; 
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = performCalculation();
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = ''; 
    operator = '';
    firstOperand = null;
    display.value = '';
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    let result = performCalculation();
    display.value = result;
    currentInput = result;
    operator = '';
    firstOperand = null;
}

function performCalculation() {
    let secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}
