// NOTE VARIABLES AND GLOBALS

const displayNum = document.getElementById('display-nums');
const plusOp = document.getElementById('plus-op');
const minusOp = document.getElementById('minus-op');
const divideOp = document.getElementById('divide-op');
const multipleOp = document.getElementById('multiply-op');

// let firstNumber; 
// let secondNumber;
// let operation;

// let resultElem = document.getElementById('result')

// NOTE FUNCTIONS

// class Calculator {
//     constructor(context) {
//         this.context = context;
//     }

//     clickNumber(num) {
//         let stringNum = new String(num);
    
//         if (!firstNumber) {
//             firstNumber = stringNum;
//             resultElem.innerText = firstNumber;
//         }
     
//         else if (!operation) {
//             firstNumber += stringNum;
//             resultElem.innerText = firstNumber;
//         }
     
//         else if (!secondNumber) {
//             secondNumber = stringNum;
//             resultElem.innerText = secondNumber;
//         }  
    
//         else {
//             secondNumber += stringNum;
//             resultElem.innerText = secondNumber;
//         }
//     }

//     showResult() {
//         let first = parseInt(firstNumber)
//         let second = parseInt(secondNumber)
//         let calculation = 0;
    
//         switch (operation) {
//             case '+': calculation = first + second; break;
//             case '-': calculation = first - second; break;
//             case '/': calculation = first / second; break;
//             case '*': calculation = first * second; break;
//         }
    
//         clearResult()
//         firstNumber = new String(calculation)
//         resultElem.innerText = calculation;
//     }

//     clickOperator(op) {
//         operation = op;
//     }

//     clearResult() {
//         firstNumber = undefined;
//         secondNumber = undefined;
//         operation = undefined;
    
//         resultElem.innerText = '';
//     }

// }

// let numberConcat = "34";

// const newNumber = parseInt(numberConcat);

// // console.log(numberConcat.startsWith("+"));

// console.log(parseInt(numberConcat)); 

// console.log(typeof newNumber);

// valueOne * valueTwo
// valueOne + valueTwo
// valueOne / valueTwo
// valueOne - valueTwo

// "3+4"

function addToOutput(input) {
    displayNum.value += input;
    if (input == '-') {
        
    }
}

function calculate() {
    console.log(displayNum.value);
    // valueOne = valueOne;
    // valueTwo = valueTwo;
    // let result = 0
    
    // switch (operation) {
    //     case '+':
    //         result = valueOne + valueTwo;
    //         break;
    //     case '-':
    //         result = valueOne - valueTwo;
    //         break;
    //     case '/':
    //         result = valueOne / valueTwo;
    //         break;
    //     case '*':
    //         result = valueOne * valueTwo;
    //         break;
    //     default:
    //         // console.log("error");
    //         break;
    // }
    // return result;
}

// console.log(calculate(20, 20, '+'));

function clearReset() {
    displayNum.value = '';
}

