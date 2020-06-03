//Selectors
const input = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");

function display() {
    numbers.forEach(number => number.addEventListener("click", (e) => {
        input.innerText = e.target.innerText;
    }))
}

display();




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
