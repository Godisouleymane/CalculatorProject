const ecran = document.getElementById('input-result');
const delBtn = document.querySelector('.clear');

let firstNumber = "";
let currentOperation = "";
let secondNumber = "";
let resultat = false;
let check = false;

function updateScreen(text) {
    ecran.value = text;
}

function appendNumber(number) {
    if (!resultat) {
        if (currentOperation == "") {
            firstNumber += number;
            updateScreen(firstNumber);
        } else {
            secondNumber += number;
            updateScreen(secondNumber);
        }
    }
}

function operateurPoint(point) {
    if (!resultat) {
        if (firstNumber === "" && !check) {
            check = true;
            firstNumber = "0."
            updateScreen(firstNumber);
        } else if (!point.includes(firstNumber) && !check) {
            check = true;
            firstNumber += point;
            updateScreen(firstNumber);
        } else if (secondNumber === "" && currentOperation !== "" && check) {
            check = true;
            secondNumber = "0."
            updateScreen(secondNumber)
        } else if (!point.includes(secondNumber) && currentOperation !== "" && check) {
            secondNumber += point;
            updateScreen(secondNumber);
        }
    }
}

function chooseOperation(operation) {
    if (!resultat) {
        if (firstNumber !== "") {
            currentOperation = operation;
        }
    }
}

function clearDisplay() {
    firstNumber = "";
    currentOperation = "";
    secondNumber = "";
    resultat = false;
    check = false;
    updateScreen("0");
}

function compute() {
    if (firstNumber !== "" && currentOperation !== "" && secondNumber !== "") {
        firstNumber = String(calculate(parseFloat(firstNumber), currentOperation, parseFloat(secondNumber)));
        currentOperation = "";
        secondNumber = "";
        updateScreen(firstNumber);
        resultat = true;
    }
}


function calculate(firstNumber, operation, secondNumber) {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            if (secondNumber !== 0) {
                return firstNumber / secondNumber;
            } else {
                return "Error";
            }
        default:
            return "Error";
    }
}

delBtn.addEventListener("click", () => {
    ecran.value = ecran.value.slice(0, -1);
  
    firstNumber = firstNumber.toString().slice(0, -1);
    
    if (currentOperation !== "") {
        secondNumber = secondNumber.toString().slice(0, -1);
        console.log(secondNumber);
    } 

    if (!firstNumber.includes(".")) {
      check = false
    } 

    if (ecran.value === "") {
        clearDisplay()
    }
    updateScreen(ecran.value);
});
