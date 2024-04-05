
// initialize count to 0
let count = 0;

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

const countDisplay = document.getElementById("countDisplay");

function displayCount() {
    countDisplay.innerText = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");

    }
}


// Practice task
function resetCount() {
    count = 0;
    displayCount(); // Display the count
    alert(" Followers count has been reset 😒");
}

