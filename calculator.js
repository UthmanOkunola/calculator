const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('#screen');
const operators = document.querySelectorAll('.operator');
// const Reload = document.querySelector('#clear');
// const Delete = document.querySelector('#Delete');
let selectedOperator = '';
// let load = '';

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event.target.value);
        console.log(event);
        screen.value += event.target.value;

    })
})

operators.forEach(function(operator){
    operator.addEventListener('click', function(event){
        console.log(event);
        selectedOperator = event.target.value;
    })
})

// Reload.addEventListener('load', function(event){
//     console.log(event);
//     if(load = event.target.value){
//         return false;
//     }

// })

function calc(){
    let text = screen.value;
    let text_arr = text.split(selectedOperator);
    screen.value = calcNum(parseInt(text_arr[0]), parseInt(text_arr[1]), selectedOperator);
}
function calcNum(p1, p2, operator) {
        switch (operator) {
            case '%':
                return p1 % p2;
            case '-':
                return p1 - p2;
            case '/':
                return p1 / p2;
            case '*':
                return p1 * p2;
            case '+':
                return p1 + p2;
            default:
                return 0;
        }
}
function clear(){
    screen.value = '';
}

function erase(){
    screen.value = screen.value.substr(0,screen.value.length -1);
}