
let width = document.getElementById("width");
let length = document.getElementById("length");

function calculateArea() {

    let area = parseFloat(width.value) * parseFloat(length.value);

    let result = document.getElementById("result");

    result.innerText = `The area of the rectangle is: ${area}`;;
}


// Practice task
let grocery1 = document.getElementById("grocery1");
let grocery2 = document.getElementById("grocery2");
let grocery3 = document.getElementById("grocery3");

function groceryTracker() {
    let total = totalAmount(parseFloat(grocery1.value), parseFloat(grocery2.value), parseFloat(grocery3.value));
    let groceryResult = document.getElementById('groceryResult');
    groceryResult.innerText = `The total amount is $ ${total}`;
}

function totalAmount(num1, num2, num3) {
    return num1 + num2 + num3;
}