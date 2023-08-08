let firstNumber = ""; 
let secondNumber = ""; 
let operatorValue; 
let toggle = 1; 
let displayValue = 0; 
let result = ""; 

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

function evaluate(a, operator, b) {
    if (operator === "+") {
        return add(a, b); 
    } else if (operator === "-") {
        return subtract(a, b); 
    } else if (operator === "x") {
        return multiply(a, b); 
    } else (operator === "/"); {
        return divide (a, b); 
    }
}

const numbers = document.querySelectorAll('#number'); 
const display = document.querySelector('.calculator__output'); 
numbers.forEach((number) => {
    number.addEventListener('click', function(){
        console.log('number'); 
        display.textContent += number.textContent; 
        if (toggle === 1) {
            firstNumber += number.textContent; 
        } else if (toggle === 2) {
            secondNumber += number.textContent; 
        }
        console.log(firstNumber); 
        console.log(secondNumber); 
    }); 
}); 

const operators = document.querySelectorAll('#calculator__key--operator'); 
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.textContent += operator.textContent; 
        operatorValue = operator.textContent; 
        toggle = 2; 
        console.log(operatorValue);  
    })
})

const results = document.querySelector('#calculator__key--enter'); 
results.addEventListener('click', () => {
    result = evaluate(Number(firstNumber), operatorValue, Number(secondNumber));
    display.textContent = result; 
}); 

const clear = document.querySelector('#AC'); 
clear.addEventListener('click', () => {
    display.textContent = ""; 
    result = ""; 
    firstNumber = ""; 
    operatorValue = ""; 
    secondNumber = ""; 
    toggle = 1; 
})