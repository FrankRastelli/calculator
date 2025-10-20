let num1;
let operator;
let num2;

let displayValue = "0";

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
    if (b == 0) {
        return "undefined";
    }
    else {
        return a / b;
    }
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b) 
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}


// display
const screen = document.querySelector(".screen-content");

function updateScreen() {
    screen.textContent = displayValue;
}

// start with 0 on screen
updateScreen();

function inputDigit(digit) {
    if (displayValue === "0") {
        displayValue = digit;
    }
    else {
        displayValue += digit;
    }

    updateScreen();
}

function clearDisplay() {
    displayValue = "0";
    updateScreen();
}

document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        inputDigit(btn.textContent.trim());
    });
})