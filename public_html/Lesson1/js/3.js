'use strict';
let result;
/*
 1 10 прибавляем к 10 получаем 20
 2 20 преобразуем в строку и добавляем к строке "10"
 3 строку "2010" присваиваем в переменную result
 4 с помощью console.log выводим result в консоль
 */
result = 10 + 10 + "10";
console.log(result);

/*
 1 10 преобразуем в строку
 2 "10" и добавляем к строке "10"
 3 К строке "1010" добавляем преобразованное в строку значение "10"
 4 строку "101010" присваиваем в переменную result
 5 с помощью console.log выводим result в консоль
 */


result = 10 + "10" + 10;
console.log(result);



/*
 1 10 прибавляем к 10 получаем 20
 3 К 20 добавляем значение 10 (преобразованное в число с помощью унарного плюса)
 4 полученное значение 30 записываем в переменную result
 5 с помощью console.log выводим result в консоль
 */


result = 10 + 10 + +"10";
console.log(result);

/*
 1 операция унарного плюса к строке с запятой дает нам значение NaN (не число) 
 2 Операция с "не числом", тоже даст "Не число"
 3 полученное "Не число" записываем в переменную result
 5 с помощью console.log выводим result в консоль
 */

result = 10 / +"2,5";
console.log(result);


