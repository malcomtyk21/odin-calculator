let FINISH_EXECUTION = false;

// DOM Elements
const final = document.querySelector(".final");
const equation = document.querySelector(".equation");
const clear = document.querySelector("#clear");
const back = document.querySelector("#delete");

const modular_operation = document.querySelector("#modulor");
const divide_operation = document.querySelector("#divide");
const multiply_operation = document.querySelector("#multiply");
const minus_operation = document.querySelector("#minus");
const addition_operation = document.querySelector("#addition");

const zero = document.querySelector("#digit_0");
const one = document.querySelector("#digit_1");
const two = document.querySelector("#digit_2");
const three = document.querySelector("#digit_3");
const four = document.querySelector("#digit_4");
const five = document.querySelector("#digit_5");
const six = document.querySelector("#digit_6");
const seven = document.querySelector("#digit_7");
const eight = document.querySelector("#digit_8");
const nine = document.querySelector("#digit_9");

const negate = document.querySelector("#negate");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");

// Functions
function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == 'x') {
        return multiply(num1, num2);
    } else if (operator == '÷') {
        return divide(num1, num2);
    } else {
        return modular(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modular(num1, num2) {
    return num1 % num2;
}

function isEquation(strArray) {
    if (strArray.length == 3) {
        return true;
    }
    return false;
}

function executeEquation(strArray) {
    let result;
    result = operate(strArray[1], Number(strArray[0]), Number(strArray[2]));
    return result;
}

function checkOperator() {
    let currentEquation = final.innerHTML;
    let strArray = currentEquation.trim().split(" ");

    if (isEquation(strArray)) {
        final.innerHTML = executeEquation(strArray) + '';
        equation.innerHTML = currentEquation;
    } 
}

// Event Listener
zero.addEventListener("click", () => {
    final.innerHTML += '0';
});

one.addEventListener("click", () => {
    if (FINISH_EXECUTION) {
        final.innerHTML = '';
        equation.innerHTML = ''; 
    }
    final.innerHTML += '1';
});

two.addEventListener("click", () => {
    final.innerHTML += '2';
});

three.addEventListener("click", () => {
    final.innerHTML += '3';
});

four.addEventListener("click", () => {
    final.innerHTML += '4';
});

five.addEventListener("click", () => {
    final.innerHTML += '5';
});

six.addEventListener("click", () => {
    final.innerHTML += '6';
});

seven.addEventListener("click", () => {
    final.innerHTML += '7';
});

eight.addEventListener("click", () => {
    final.innerHTML += '8';
});

nine.addEventListener("click", () => {
    final.innerHTML += '9';
});

clear.addEventListener("click", () => {
    final.innerHTML = '';
    equation.innerHTML = '';
    FINISH_EXECUTION = false;
});

back.addEventListener("click", () => {
    const currentEquation = final.innerHTML;
    const lastChar = currentEquation.charAt(currentEquation.length - 1)

    if (lastChar == ' ') {
        final.innerHTML = final.innerHTML.slice(0, final.innerHTML.length - 3);
    } else {
        final.innerHTML = final.innerHTML.slice(0, final.innerHTML.length - 1);
    }
    
    equation.innerHTML = '';
    FINISH_EXECUTION = false;
});

divide_operation.addEventListener("click", () => {
    checkOperator();
    final.innerHTML += ' ÷ ';
    FINISH_EXECUTION = false;
});

multiply_operation.addEventListener("click", () => {
    checkOperator();
    final.innerHTML += ' x ';
    FINISH_EXECUTION = false;
});

minus_operation.addEventListener("click", () => {
    checkOperator();
    final.innerHTML += ' - ';
    FINISH_EXECUTION = false;
});

addition_operation.addEventListener("click", () => {
    checkOperator();
    final.innerHTML += ' + ';
    FINISH_EXECUTION = false;
});

modular_operation.addEventListener("click", () => {
    checkOperator();
    final.innerHTML += ' % ';
    FINISH_EXECUTION = false;
});

equal.addEventListener("click", () => {
    checkOperator();
    FINISH_EXECUTION = true;
});

negate.addEventListener("click", () => {
    let currentEquation = final.innerHTML;
    let strArray = currentEquation.trim().split(" ");

    if (strArray.length == 1) {
        if (currentEquation.slice(0, 1) == '-') {
            final.innerHTML = currentEquation.slice(1, currentEquation.length);
        } else {
            final.innerHTML = '-' + final.innerHTML;
        }
    }
});

decimal.addEventListener("click", () => {
    let currentEquation = final.innerHTML;
    let strArray = currentEquation.trim().split(" ");

    if (strArray.length == 1) {
        if (!strArray[0].includes('.')) {
            final.innerHTML += '.'
        }
    }

    if (strArray.length == 3) {
        if (!strArray[2].includes('.')) {
            final.innerHTML += '.'
        }
    }
});