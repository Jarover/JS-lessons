"use strict";

let process, a, b;


do {

    a = Number(prompt("Введите число"));

    b = declination(a);

    alert(`Ваша сумма в ${a} ${b} успешно зачислена.`)
    
    process = confirm("Продолжим?");

} while (process);


/*  Функция формирования правильного падежа для слова рубль
 * 
 *  Все варианты определяются по последним двум или одной 
 *  цифре нашего числа
 *  
*/ 
function declination(arg) {
    let word;
    let arr = ['рубль', 'рубля', 'рублей'];

    let cases = [2, 0, 1, 1, 1];


    if (arg % 100 > 4 && arg % 100 < 20) {

        word = arr[2];
    } else {

        if (arg % 10 < 5) {
            word = arr[cases[arg % 10]];
        } else {
            word = arr[2];
        }
    }



    return word;
}


// тестируем работу функции на  данных oт 0 до 1000
// и выводим списком на страницу
let upperNumber = 1000;
let ul = document.createElement('ul');

document.getElementById('testList').appendChild(ul);
for (let i = 0; i < upperNumber; i++) {

    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + i + " " + declination(i);


}

