/*------------------------ Cached Element References ------------------------*/

/*
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
*/

/*
**APPROACH**
1.Select Elements: Get references to the display and buttons.
2.Add Event Listeners: Make button respond to clicks.
3.Handle Numbers: Update the display when numbers are clicked.
4.Handle Operators: Store the operator and the input.
5.Calculate: Perform the operation when equals is clicked.
6.Clear Display: Reset everything when the clear button is clicked.
*/

/*-------------------------------- Constants --------------------------------*/
// Select the display element and all the buttons
const display = document.querySelector('.display');
console.log('Display element:', display);
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
// Create variables for the current and previous input, and operator
let currentInput = '';
let previousInput = '';
let operator = '';

/*----------------------------- Event Listeners -----------------------------*/
// Add event listeners to buttons

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        console.log(`Button clicked: ${value}`);

        if (button.classList.contains('number')) {
            handleNumber(value);
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (value === 'C') {
            console.log('Clear button clicked');
            clearDisplay();
        }
    });
});

/*-------------------------------- Functions --------------------------------*/
// Handle number button clicks
function handleNumber(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Update the display with the provided value
function updateDisplay(value) {
    console.log('confirm update');
    display.textContent = value;
}

// Handle operator button clicks
function handleOperator(value) {
    if (currentInput === '') return; 

    if (previousInput !== '') {
        calculate();
    }

    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

// Perform calculation
function calculate() {
    let result;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return; // convert the calc display string to a int to perfom calculation

    switch (operator) { // assign rule for non-numbers (operators)
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Clear input and reset the display
function clearDisplay() {
    console.log('confirm clearDisplay function'); 
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}
