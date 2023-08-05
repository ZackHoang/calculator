let firstNumber; 
let secondNumber; 
let operator; 
let displayValue = 0; 

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

function operate (a, operator, b) {
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
numbers.forEach((number) => {
    number.addEventListener('click', function(){
        console.log('number'); 
        document.querySelector('.calculator__output').textContent += number.textContent; 
    }); 
}); 