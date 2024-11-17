let currentInput = '0';
let isEvaluated = false;

function inputDigit(digit) {
    if (isEvaluated) {
        currentInput = digit;
        isEvaluated = false;
    } else {
        currentInput = currentInput === '0' ? digit : currentInput + digit;
    }
    updateDisplay();
}

function inputOperator(operator) {
    if (isEvaluated) {
        isEvaluated = false;
    } else if (/[+\-*/]$/.test(currentInput)) {
        currentInput = currentInput.slice(0, -1); // Prevent consecutive operators
    }
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function inputDecimal() {
    if (isEvaluated) {
        currentInput = '0.';
        isEvaluated = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace('×', '*').replace('÷', '/')).toString();
        isEvaluated = true;
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
