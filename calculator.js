function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}


let A = 2;
let B = 3;


let operator = "+";

let result;

switch (operator) {
    case "+":
        result = add(A, B);
        break;
    case "-":
        result = subtract(A, B);
        break;
    case "*":
        result = multiply(A, B);
        break;
    case "/":
        result = divide(A, B);
        break;
    default:
        result = "Invalid operator";
}

console.log(`Result: ${result}`);
