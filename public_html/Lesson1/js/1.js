'use strict';
let process, Tc, Tf;

do {
    Tc = prompt('Укажите температу по цельсию?');

    Tf = (9 / 5) * Tc + 32;

    alert('Температура по фаренгейту = ' + Tf);

    process = confirm("Продолжим?");

} while (process);


