let firstValue = null;
let selectedOperator = null;
let secondValue = null;
let result = null;

let firstReceived = false;
let waitingForSecond = true;
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
        return "no🙂‍↔️no🚫no👎";
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
    if (firstReceived === true && waitingForSecond === true) {
        displayValue = "0";
        waitingForSecond = false;
    }

    if (displayValue === "0") {
        displayValue = digit;
    }
    else {
        displayValue += digit;
    }

    updateScreen();
}

document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        inputDigit(btn.textContent.trim());
    });
});

// -- calculator logic --
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

        firstReceived = true;
    }
    else if (selectedOperator != null && displayValue === firstValue) {
        selectedOperator = operator;
    }
    else {
        secondValue = parseFloat(displayValue);

        waitingForSecond = true;

        result = operate(firstValue, secondValue, selectedOperator);

        firstValue = result;

        secondValue = null;

        displayValue = result;

        updateScreen();

        selectedOperator = operator;
    }

}

function equalsPressed() {
    if (firstReceived === true && selectedOperator != null) {
        secondValue = parseFloat(displayValue);

        waitingForSecond = true;

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

    firstReceived = false;
    waitingForSecond = true;
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

// -- extra --
const deletion = document.querySelector(".delete");

deletion.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    updateScreen();
});