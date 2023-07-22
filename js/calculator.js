let number = 0;
let number_1 = 0;
let number_2 = 0;
let operand = 0;
let last_operand = false;
function number_change(){
    document.getElementById("changing_num").innerHTML = `<div id='changing_num'>${number}</div>`;
}

function update_number(input){
    last_operand = false;
    if (number_1 === number){
        number = 0;
    }
    number = number *10 + input;
    number_change();
}

function make_zero(){
    number = 0;
    number_change();
}

function operand_in(operand_input){
    if (last_operand === true){
        if (operand_input === "%"){
            operand = operand_input;
        }
        else if (operand_input !== '='){
            number_1 = 0;
        }
        
    }
    last_operand = true;
    if (number_1 !== 0){
        number_2 = number;
        if (operand !== "%"){
            do_operation();
        } 
        operand = operand_input;
        if (operand === "%"){
            do_operation();
        } 
    } else {
        number_1 = number;
        operand = operand_input;
        if (operand === "%"){
            do_operation();
        } 
        make_zero();
    }
}

function do_operation(){
   
    if (operand === '+'){
        number_1 = number_1 + number_2;
    } else if (operand === '_') {
        number_1 = number_1 - number_2;
    } else if (operand === '*') {
        number_1 = number_1 * number_2;
    } else if (operand === '/') {
        number_1 = number_1 / number_2;
    } else if (operand === '^') {
        number_1 = Math.pow(number_1,number_2);
    } else if (operand === '%') {
        number_1 = number_1 / 100;
    } else {
        operand = 0;
    }
    operand = 0
    number_2 = 0;
    number = number_1;
    number_change();
}
