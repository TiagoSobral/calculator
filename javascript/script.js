const body = document.querySelector("body");
const display = document.createElement("div");

display.classList.toggle("display")

body.appendChild(display);

for (let i = 1; i <= 5; i++ ) {
    const calRows = document.createElement("div");
    body.appendChild(calRows);
    calRows.classList.toggle(`btnRow${i}`)

    for (let j = 1; j <= 4; j++) {
        const calColumns = document.createElement("div");
        const btns = document.createElement("button");
        calColumns.classList.toggle(`btnColumn${j}`)
        calRows.appendChild(calColumns);
        calColumns.appendChild(btns);

        if (j === 4) {
            calColumns.setAttribute("id", `operator${i}`);
        };
        if (i > 1 && i < 5 && j < 4) {
            calColumns.setAttribute("id", "number");
        };
        if (i === 1 && j < 4) {
            calColumns.setAttribute("id", "ac");
        };

        if (i === 5) {
            if (j === 1) {
                calColumns.setAttribute("id", "number");
            }
            else if (j === 2) {
                calColumns.setAttribute("id", "float");
            }
            else if (j === 3) {
                calColumns.setAttribute("id", `operator${i+1}`); 
            }
        };
    };
};




let num1;
let num2;
let operator;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(number1, number2, operation) {
    if (operation === "+") {
        return add(number1, number2);
    }
    else if (operation === "-") {
        return subtract(number1, number2);
    }
    else if (operation === "*") {
        return multiply(number1, number2);
    }
    else {
        return divide(number1, number2);
    }
};

