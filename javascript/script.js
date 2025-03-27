const body = document.querySelector("body");
const display = document.createElement("div");
const topDisplay = document.createElement("div");
const bottomDisplay = document.createElement("div");

display.classList.toggle("display");
topDisplay.classList.toggle("topDisplay");
bottomDisplay.classList.toggle("bottomDisplay");

display.appendChild(topDisplay);
display.appendChild(bottomDisplay);
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

topDisplay.textContent = "";
bottomDisplay.textContent = "0";
btnAC.textContent = "AC";
btnDivide.textContent = "÷"
btnMultiply.textContent = "*"
btnSubtract.textContent = "-"
btnAddition.textContent = "+"
btnEqual.textContent = "=";
btnFloat.textContent = ".";


for (let i = divNumber.length -1; i >= 0; i--) {
    divNumber[i].setAttribute("id", `n-${i}`);
    btnNumber[i].textContent = `${i}`;
};

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

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
    let result = "";
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
    return result;
};

function populateDisplay(value) {
    displayValue += value.textContent;
    return bottomDisplay.textContent = displayValue;
};

function getResult() {
    topDisplay.textContent = displayValue;
    arrayNumFromDisplay = displayValue.split(`${operator}`).map((item) => Number(item));
    num1 = arrayNumFromDisplay[0];
    num2 = arrayNumFromDisplay[1];
    displayValue = Math.round(operate(num1, operator, num2) * 1000)/ 1000;
    operator = "";
    return bottomDisplay.textContent = displayValue;
};

function clearDisplay() {
    num1 = "";
    num2 = "";
    displayValue = "";
    operator = "";
    topDisplay.textContent = "";
    return bottomDisplay.textContent = "0"
};

let arrayFromDisplay = function(num) {
    let array = displayValue.split(`${operator}`);
    return array[num] ;
};

const allBtns = document.querySelectorAll("button");

allBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (!isNaN(button.textContent)) {
            if (num2) {
                clearDisplay();
            }
            btnAC.textContent = "C";
            return populateDisplay(button);
        }
        else if (button.textContent === ".") {
            if (!displayValue.includes(".") && !operator 
            || operator && !arrayFromDisplay(1).includes(".")) {
                return populateDisplay(button);
            }
        }
        else if (button.textContent === "AC") {
           return clearDisplay();
        }
        else if (button.textContent === "C") {
           if (displayValue.length <= 1) {
            clearDisplay();
            return btnAC.textContent = "AC";
           }
           else {
            displayValue = displayValue.slice(0,-1);
            return bottomDisplay.textContent = displayValue;
           }
        }
        else if (button.textContent === "=") {
            btnAC.textContent = "AC";
            if (arrayFromDisplay(1)) {
                if (operator === "÷" && arrayFromDisplay(1) === "0") {
                    return bottomDisplay.textContent = "Error";
                }
                else {
                return getResult();
                }
            }
        }
        else {
            if (operator === "") {
                operator = button.textContent;
                return populateDisplay(button);
            }
            else {
                getResult();
                operator = button.textContent;
                return populateDisplay(button);
            }
        }
    })
});



// btnNumber.forEach((button) => {
//     button.addEventListener("click", () => {
//         num1 += button.textContent
//         return display.textContent = num1
//     })
// });

// divOperator.forEach((button) => {
//     button.addEventListener("click", () => { 
//         operator = button.textContent
//         }
//     )
// });

// btnAC.addEventListener("click", () => {
//     num1 = "";
//     num2 = "";
//     operator = "";
//     return display.textContent = "0"
// });

// btnEqual.addEventListener("click", () => {
//     let result = operate(num1, operator, num2);
//     return display.textContent = result;
// })



/*PSEUDOCODE:

1S STEP: IF NUMBER CLICKED NOT 0 SUBSTITUTE 0 FOR NUMBER CLICKED. NUMBER IS STORED IN VARIABLE NUM1

2ND STEP: ADD POSSIBILITY TO KEEP ADDING NUMBERS UNTIL OPERATOR BUTTON IS CLICKED.

3RD STEP: ONCE OPERATOR BUTTON IS CLICKED, SIGN IS STORED IN OPERATOR VARIABLE & NUMBER STARTS BEING STORED IN NUM2 VARIABLE.

4TH STEP: ONCE EQUAL BTN IS CLICKED THE OPERATION IS DONE AND THE RESULT SHOWS IN THE DISPLAY.

IF OPERATOR IS UNDEFINED CALCULATE THE SAME WAY AS EQUAL DOES.

*/

