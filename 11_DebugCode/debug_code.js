
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const resultDiv = document.getElementById("result");


function performOperation() {
    // get user input form input fields
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);

    // check if the input is valid number
    if (!isNaN(num1) && !isNaN(num2)) {
        // perform the operation
        let result = multiply(num1, num2);

        // display the result
        displayResult(result);
    } else {
        displayResult("please enter valid numbers")
    }

}

function multiply(a, b) {
    debugger;

    return (a * b);
}


const displayResult = (text) => resultDiv.innerText = `The result is: ${text}`;