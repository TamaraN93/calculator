//Selectors
const input = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");

let displayValue = "0";

function display() {
    //Display the numbers when clicking
    numbers.forEach(number => {
        number.addEventListener("click", (e) => {
            let btnText = e.target.innerText;
            if (displayValue === "0")
            displayValue = " ";
            displayValue += btnText;
            input.innerText = displayValue;  
        })
    })
    dot.addEventListener("click", (e) => {
        //Display the . just once
        let btnText = e.target.innerText;
        if (displayValue.includes(".")) {
            input.innerText = displayValue;
        } else {
            displayValue += btnText
            input.innerText = displayValue;
        }
    }
        
)}

display();

let firstNum = "";
let secondNum = "";
let operator = "";

function calculator(firstNum, secondNum, operator) {
    operators.forEach(operator => {
        operator.addEventListener("click", (e) => {
            console.log(displayValue);
        })
    })
}

calculator();


//Operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("You can't divide by zero!");
    }
    return a / b;
    
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
    }
}

function clearDisplay() {
    clear.addEventListener("click", (e) => {
        displayValue = "0";
    })
}

clearDisplay();


