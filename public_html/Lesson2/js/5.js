"use strict";

function mathOperation(arg1,arg2, operation) {
    let result;
    switch (operation) {
        case "plus":
            result = plus(arg1,arg2);
        break;
        case "minus":
            result = minus(arg1,arg2);
        break;
        case "division":
            result = division(arg1,arg2);
        break;
        case "multiplication":
            result = multiplication(arg1,arg2);
        break;    
        
        
    }
    
    return result;
}

// сложение
function plus(a, b) {
    return a + b;
}

// разность
function minus(a, b) {
    return a - b;
}

// деление
function division(a, b) {
    return a / b;
}


// умножение
function multiplication(a, b) {
    return a * b;
}


// Тест

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));

console.log("Число 1: " + a);
console.log("Число 2: " + b);

console.log("Результат сложения: " + mathOperation(a, b,"plus"));

console.log("Результат вычитания: " + mathOperation(a, b,"minus"));

console.log("Результат умножения: " + mathOperation(a, b,"multiplication"));

console.log("Результат деления: " + mathOperation(a, b,"division"));