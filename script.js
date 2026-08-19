//Hämta knapparna och sätt eventlyssnare
// visa i span elementen vilken knapp som tryckts på


// variabler för knappar och display
const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

// Variabler för uträkning
let a = 0;
let b = 0;
let sum = 0;
let isOperatorClicked = false;
let operator;

buttons.forEach(button => {
   
    const operators = [ "add", "subtract", "multi", "divide" ];
    

    button.addEventListener("click", (event) => {
        let number = button.textContent;

        
        if (button.value === "number" && !isOperatorClicked){
            display.value = "";
            display.value += number;  

            a = Number(display.value);
        } 

        if (operators.includes(button.value)){
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

        if (event.target.classList.contains("delete")){
            let deleteText = display.value.slice(0, -1)
            display.value = deleteText
        }

         if (event.target.classList.contains("clear")){
            display.value = "";
            b = 0;
            a = 0;
            isOperatorClicked = false;
        }

    

        if(button.value === "equal"){
            console.log("a:", a, "b:", b, "operator:", operator)
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
        isOperatorClicked = false;
        a = Number(display.value)
        
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

