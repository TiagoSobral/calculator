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

const displayContent = document.querySelector(".display");
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

display.textContent = "0";
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

let num1 = "";
let num2 = "";
let operator = "";

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

function operate(number1, operation, number2) {
    if (operation === "+") {
        return add(number1, number2);
    }
    else if (operation === "-") {
        return subtract(number1, number2);
    }
    else if (operation === "*") {
        return multiply(number1, number2);
    }
    else if (operation === "÷"){
        return divide(number1, number2);
    }
};



btnNumber.forEach((button) => {
    button.addEventListener("click", () => {
        num1 += button.textContent
        return display.textContent = num1
    })
});




/*PSEUDOCODE:

1S STEP: IF NUMBER CLICKED NOT 0 SUBSTITUTE 0 FOR NUMBER CLICKED. NUMBER IS STORED IN VARIABLE NUM1

2ND STEP: ADD POSSIBILITY TO KEEP ADDING NUMBERS UNTIL OPERATOR BUTTON IS CLICKED.

3RD STEP: ONCE OPERATOR BUTTON IS CLICKED, SIGN IS STORED IN OPERATOR VARIABLE & NUMBER STARTS BEING STORED IN NUM2 VARIABLE.

4TH STEP: ONCE EQUAL BTN IS CLICKED THE OPERATION IS DONE AND THE RESULT SHOWS IN THE DISPLAY.

*/

