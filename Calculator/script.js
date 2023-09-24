const display = document.getElementById("display");
        
function clearDisplay() {
    display.value = "";
}

function appendToDisplay(val) {
    display.value += val;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquare() {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue).toString();
}

function calculateRemainder() {
    const expression = display.value;
    const operands = expression.split('%');
    if (operands.length === 2) {
        const dividend = parseFloat(operands[0]);
        const divisor = parseFloat(operands[1]);
        if (!isNaN(dividend) && !isNaN(divisor)) {
            const remainder = dividend % divisor;
            display.value = remainder.toString();
        } else {
            display.value = "Error";
        }
    } else {
        display.value = "Error";
    }
}