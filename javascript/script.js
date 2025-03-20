const body = document.querySelector("body");
const display = document.createElement("div");

display.classList.toggle("display")

body.appendChild(display);

for (let i = 1; i <= 5; i++ ) {
    const calRows = document.createElement("div");
    body.appendChild(calRows);
    calRows.classList.toggle(`btn-row`)

    for (let j = 1; j <= 4; j++) {
        const calColumns = document.createElement("div");
        const btns = document.createElement("button");
        calRows.appendChild(calColumns);
        calColumns.appendChild(btns);

        if (j === 4) {
            calColumns.setAttribute("class", "operator");
            calColumns.setAttribute("id", `op-${i}`);
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
                calColumns.setAttribute("id", `op-${i}`);
            }
        };
        }   
    };

const allClear = document.querySelectorAll(".ac");
const btnOpFive = document.querySelector("#op-5");

allClear[0].remove();
allClear[1].remove();
btnOpFive.remove();

const divNumber = document.querySelectorAll(".number");
const divOperator = document.querySelectorAll(".operator");
const divBtnRow = document.querySelectorAll(".btn-row");
const btnAC = document.querySelector(".ac > button");
const btnDivide = document.querySelector("#op-1 > button");
const btnMultiply = document.querySelector("#op-2> button");
const btnSubtract = document.querySelector("#op-3> button");
const btnAddition = document.querySelector("#op-4> button");
const btnFloat = document.querySelector(".float > button");
const btnEqual = document.querySelector("#op-5> button");
const btnNumber = document.querySelectorAll(".number > button");

btnAC.textContent = "AC";
btnDivide.textContent = "÷"
btnMultiply.textContent = "x"
btnSubtract.textContent = "-"
btnAddition.textContent = "+"
btnEqual.textContent = "=";
btnFloat.textContent = ",";


for (let i = divNumber.length -1; i >= 0; i--) {
    divNumber[i].setAttribute("id", `n-${i}`);
    btnNumber[i].textContent = `${i}`;
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

