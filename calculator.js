let firstNumber = ""; 
let secondNumber = ""; 
let operatorValue = ""; 
let toggleNumber = 1; 
let toggleOperator = 1;  
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
        display.textContent += number.textContent; 
        if (toggleNumber === 1) {
            firstNumber += number.textContent; 
        } else if (toggleNumber === 2) {
            secondNumber += number.textContent;
            toggleOperator = 2;  
        }
        console.log('First Number: ' + firstNumber); 
        console.log('Second Number: ' + secondNumber); 
    }); 
}); 

const operators = document.querySelectorAll('#calculator__key--operator'); 
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.textContent += operator.textContent; 
        if (toggleOperator === 1) {
            toggleNumber = 2;
            operatorValue = operator.textContent;
            console.log('operator: ' + operatorValue);
        } else if (toggleOperator === 2) {
            console.log('operator: ' + operatorValue);
            result = evaluate(Number(firstNumber), operatorValue, Number(secondNumber));
            operatorValue = operator.textContent;
            console.log('result: ' + result); 
            display.textContent = result; 
            display.textContent += operator.textContent; 
            firstNumber = result;    
            secondNumber = ""; 
        } 
        //console.log('operator: ' + operatorValue);  
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