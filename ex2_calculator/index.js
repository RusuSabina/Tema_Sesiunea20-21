/*let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
const addBtn = document.querySelector(".add");
const substractBtn = document.querySelector(".substract");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const error = document.querySelector(".number-error");
const resultForm = document.querySelector(".form-result");

function validateInput(value) {
    if (value.length === 0) {
        error.innerHTML = "E necesar ca fiecare input sa contina mainimum o cifra!";
    } else {
        error.innerHTML = "";
    }
    return error.innerHTML === "";
}

firstNumber.addEventListener("input", function (event) {
    const firstNumber = event.target.value;
    validateInput(firstNumber);
});

secondNumber.addEventListener("input", function (event) {
    const secondNumber = event.target.value;
    validateInput(secondNumber);
});

function executeOperation(operationName, op) {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = op(first, second);

    resultForm.innerHTML = `Rezulatul este: ${result}`;
}

addBtn.addEventListener("click", function () {
    executeOperation("adunare", (a, b) => a + b);
});

substractBtn.addEventListener("click", function () {
    executeOperation("scadere", (a, b) => a - b);
});

divideBtn.addEventListener("click", function () {
    executeOperation("impartire", (a, b) => a / b);
});

multiplyBtn.addEventListener("click", function () {
    executeOperation("inmultire", (a, b) => a * b);
});*/

let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");

const addButton = document.querySelector(".add");
const substractButton = document.querySelector(".substract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const errorNumber = document.querySelector(".error-message");
const formResult = document.querySelector(".form-result");



firstNumber.addEventListener("input", function (event) {
    const firstNumber = event.target.value;
    validateInput(firstNumber);
});

secondNumber.addEventListener("input", function (event) {
    const secondNumber = event.target.value;
    validateInput(secondNumber);
});

function execOperation(operationName, op) {
    const first = Number(firstNumber.value);
    const second = Number(secondNumber.value);
    const result = op(first, second);

    formResult.innerHTML = `Rezulatul operatiei de ${operationName} este: ${result}`;
}

addButton.addEventListener("click", function () {
    execOperation("adunare", (a, b) => a + b);
});

substractButton.addEventListener("click", function () {
    execOperation("scadere", (a, b) => a - b);
});

divideButton.addEventListener("click", function () {
    execOperation("impartire", (a, b) => a / b);
});

multiplyButton.addEventListener("click", function () {
    execOperation("inmultire", (a, b) => a * b);
});
