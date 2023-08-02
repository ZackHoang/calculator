let firstNumber; 
let secondNumber; 
let operator; 

function add (a, b) {
    return a + b;  
}

function subtract (a, b) {
    return a - b; 
}

function multiply (a, b) {
    return a * b; 
}

function divide (a, b) {
    return a / b; 
}

function operate (firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber); 
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber); 
    } else if (operator === "x") {
        return multiply(firstNumber, secondNumber); 
    } else (operator === "/"); {
        return divide (firstNumber, secondNumber); 
    }
}