//Hämta knapparna och sätt eventlyssnare
// visa i span elementen vilken knapp som tryckts på

// variabler för knappar och display
const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

// Operator knappar
const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("divide");

// Variabler för uträkning
let a = 0;
let b = 0;
let sum = 0;
let isOperatorClicked = false;
let operator;

buttons.forEach(button => {

    button.addEventListener("click", () => {
        let number = button.textContent;
        
        
        if (button.value === "number" && !isOperatorClicked){
            display.value += number;  

            a = Number(display.value);
        } 

        if (button.value !== "number" && button.value !== "equal"){

            operator = button.textContent;
            isOperatorClicked = true;
            display.value = "";
            console.log(operator)
        }

        if (button.value === "number" && isOperatorClicked){
            
            number = button.textContent;
            display.value += number; 
            b = Number(display.value)
        }

    

        if(button.value === "equal"){

            switch (operator) {
                case "+":
                display.value = addNums(a, b);
                break;

                case "−":
                display.value = subtract(a, b);
                break;

                case "×":
                    display.value = multiply(a, b);
                    break;

                case "÷":
                    display.value = divide(a, b);
                    break;
            default:
        }
    }
        
      

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