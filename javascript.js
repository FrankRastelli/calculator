let firstValue = null;
let selectedOperator = null;
let secondValue = null;
let result = null;

let firstRecieved = false;
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


// -- display --
const screen = document.querySelector(".screen-content");

function updateScreen() {
    screen.textContent = displayValue;
}

// start with 0 on screen
updateScreen();

function inputDigit(digit) {
    if (firstRecieved === true) {
        displayValue = "0";
    }

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
});

// calculator logic
// so user enters first number and then selects an operator. Once an operator is selected
// we store the first number in a variable, and must indicate that it is time to get the
// next number. So i need a variable that will say an operator has been selected, so lets
// get ready for the second number. Once the second number is entered, the user can either,
// select another operator to chain, or press equals (for now).

const addition = document.querySelector(".add");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");

addition.addEventListener("click", () => {
    evaluate("+");
});

subtraction.addEventListener("click", () => {
    evaluate("-");
});

multiplication.addEventListener("click", () => {
    evaluate("*");
});

division.addEventListener("click", () => {
    evaluate("/");
});

function evaluate(operator) {
    if (selectedOperator === null) {
        selectedOperator = operator;

        firstValue = parseFloat(displayValue);

        firstRecieved = true;
    }
    else if (selectedOperator != null && displayValue === firstValue) {
        selectedOperator = operator;
    }
    else {
        secondValue = parseFloat(displayValue);

        secondRecieved = true;

        result = operate(firstValue, secondValue, selectedOperator);

        firstValue = result;

        secondValue = null;

        displayValue = result;

        updateScreen();

        selectedOperator = operator;
    }

}

function equalsPressed() {
    if (firstRecieved === true && selectedOperator != null) {
        secondValue = parseFloat(displayValue);

        secondRecieved = true;

        result = operate(firstValue, secondValue, selectedOperator);

        firstValue = result;

        secondValue = null;

        displayValue = result;

        updateScreen();

        selectedOperator = null;
    }
}

function clearAll() {
    firstValue = null;
    selectedOperator = null;
    secondValue = null;
    result = null;

    firstRecieved = false;
    displayValue = "0";
}

const equals = document.querySelector(".equals");

const clear = document.querySelector(".clear");

equals.addEventListener("click", () => {
    equalsPressed();
});

clear.addEventListener("click", () => {
    clearAll();
    updateScreen();
});