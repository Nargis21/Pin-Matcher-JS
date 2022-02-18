// Get a Random pin using Math functionalities and set the lengh of pin
function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // Recursion
        return getPin();
    }

}
// Generate a random pin using getpin function
function generatePin() {
    const pin = getPin();
    document.getElementById('input-pin').value = pin;
}

// type the input numbers Using Bubble event 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    console.log(number)
    const inputField = document.getElementById('input-display')
    if (isNaN(number)) {
        if (number == 'C') {
            inputField.value = ''
        }
        if (number == '<') {
            const inputValue = inputField.value;
            const clearEntry = inputValue.substring(0, inputValue.length - 1);
            inputField.value = clearEntry;
        }
    }
    else {
        previousNumber = inputField.value;
        newNumber = previousNumber + number;
        inputField.value = newNumber;
    }
})
// Verify the pin
function pinVerify() {
    const pinNumber = document.getElementById('input-pin').value;
    const inputNumbers = document.getElementById('input-display').value;
    const errorMessage = document.getElementById('error-msg');
    const successMessage = document.getElementById('success-msg');
    if (pinNumber == inputNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }

}