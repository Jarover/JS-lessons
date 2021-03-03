"use strict";




class Transformation {

    constructor() {

        this.number = 0;
    }


    checkInput() {
        this.number = Number(this.number);
        if (this.number < 0 || this.number > 999 || isNaN(this.number)) {
            
            return false;
        }
        
        return true;
    }
    
    parser(number) {
        
        this.number = number
        
        this.output(`Преобразуем число : ${this.number}`, number)
        if (this.checkInput()) {
          
            
            this.output(            
                {
                units: this.number%10, //это единицы
                tens: Math.floor(this.number/10)%10, //это десятки
                hundreds: Math.floor(this.number/100), //это сотни
                }  );
            
        } else {
            this.output({});
        }
    }
    
    
    output(input) {
        
        console.log(input);
    }
}

//let input = prompt("Укажите число в диапазоне от 0 до 999");
let transform = new Transformation();

// test parser

transform.parser(0);
transform.parser(-1);
transform.parser(99);
transform.parser(123);
transform.parser(999);
transform.parser(1000);