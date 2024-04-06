
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

const inputText = document.getElementById("inputText");
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");
const button = document.getElementById("btn");


function startTest() {
    // set the test text
    inputText.value = testText;

    // rest result and timer
    output.innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    button.innerText = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // disable user input
    userInput.readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    let timeElapsed = (endTime - startTime) / 1000; // in second
    let userTypedText = userInput.value;

    // Split the text using regex to count words correctly
    let typedWords = userTypedText.split(/\s+/).filter((word) => {
        return word !== "";
    }).length;

    let wpm = 0; // default value
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    console.log(timeElapsed);
    console.log(typedWords);

    // Display the results
    output.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Total Length: " + userTypedText.length + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";



    // Reset the button
    button.innerText = "Start Test";
    button.onclick = startTest;
}