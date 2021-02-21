"use strict";

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

console.log("Результат сложения: " + plus(a, b));

console.log("Результат вычитания: " + minus(a, b));

console.log("Результат умножения: " + multiplication(a, b));

console.log("Результат деления: " + division(a, b));