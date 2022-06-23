function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

let symbols = { "+": add, "-": subtract, "*": multiply, "/": divide };

var num1 = parseFloat( prompt("First Number: ?"))

var  operation = prompt("what operation?" + Object.keys(symbols).join(", "))

var num2 =parseFloat( prompt("Second Number: ?"))

var result = symbols[operation](num1,num2);
console.log(result)