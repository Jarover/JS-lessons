"use strict";

 let process;
 
 
 do {
 
 let a = Number(prompt("Введите число"));
 
 alert(declination(a));
 
 process = confirm("Продолжим?");
 
 } while (process);
 

// функция формирования правильного падежа для слова рубль
function declination(arg) {
    let result, word;
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


    result = "Ваша сумма в " + arg + " " + word + " успешно зачислена."

    return result
}


// тестируем работу функции на  данных oт 0 до 1000
// и выводим списком на страницу
let upperNumber = 1000;
let ul = document.createElement('ul');

document.getElementById('testList').appendChild(ul);
for (let i = 0; i < upperNumber; i++) {

    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + declination(i);


}

