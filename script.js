//Hämta knapparna och sätt eventlyssnare
// visa i span elementen vilken knapp som tryckts på

// variabler för knappar och display
const buttons = document.querySelectorAll("button");
const display = document.querySelector("span");

// Operator knappar
const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("divide");

// Variabler för uträkning
let a = 0;
let b = 0;
let sum = 0;


buttons.forEach(button => {

    button.addEventListener("click", () => {

        let numbers = button.textContent
        display.textContent += numbers;
        
         a = Number(display.textContent)
        console.log(typeof a)

        
        console.log(sum)

    });

});




function addNums(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a/b;
}
function multiply(a, b){
    return a * b;
}