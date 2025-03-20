const body = document.querySelector("body");
const display = document.createElement("div");

display.classList.toggle("display")

body.appendChild(display);

for (let i = 1; i <= 5; i++ ) {
    const calRows = document.createElement("div");
    body.appendChild(calRows);
    calRows.classList.toggle(`btn-row-${i}`)

    for (let j = 1; j <= 4; j++) {
        const calColumns = document.createElement("div");
        const btns = document.createElement("button");
        calRows.appendChild(calColumns);
        calColumns.appendChild(btns);

        if (j === 4) {
            calColumns.setAttribute("class", "operator");
        };
        if (i > 1 && i < 5 && j < 4) {
            calColumns.setAttribute("class", "number");
        };
        if (i === 1 && j < 4) {
            calColumns.setAttribute("class", "ac");
        };

        if (i === 5) {
            if (j === 1) {
                calColumns.setAttribute("class", "number");
            }
            else if (j === 2) {
                calColumns.setAttribute("class", "float");
            }
            else if (j === 3) {
                calColumns.setAttribute("class", "operator"); 
            }
        };
        }   
    };

const allClear = document.querySelectorAll(".ac");
const btnRowFive = document.querySelectorAll(".btn-row-5 > .operator");
const btnNumber = document.querySelectorAll(".number > button");


allClear[0].remove();
allClear[1].remove();
btnRowFive[0].remove();

for (let i = 9; i >= 0; i--) {
    btnNumber[i].textContent = `${i}`; 
}


const btnAC = document.querySelector(".ac > button");
const btnDivide = document.querySelector(".btn-row-1 > .operator > button");
const btnMultiply = document.querySelector(".btn-row-2 > .operator > button");
const btnSubtract = document.querySelector(".btn-row-3 > .operator > button");
const btnAddition = document.querySelector(".btn-row-4 > .operator > button");
const btnFloat = document.querySelector(".float > button");
const btnEqual = document.querySelector(".btn-row-5 > .operator > button");


btnAC.textContent = "AC";
btnDivide.textContent = "÷"
btnMultiply.textContent = "x"
btnSubtract.textContent = "-"
btnAddition.textContent = "+"
btnEqual.textContent = "=";
btnFloat.textContent = ",";

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

