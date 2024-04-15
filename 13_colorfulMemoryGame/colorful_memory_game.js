const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
// to save the cards pairs tow of each color in random order
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 60;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        // to set custom attribute to the element called 'data-color'
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);

    }
}

// Randomizes the order of elements in an array.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // to generate a random index
        const j = Math.floor(Math.random() * (i + 1));

        // swaps the elements at the 'i' and 'j' indices using array destructuring assignment
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    // get the clicked
    const card = event.target;

    // checks whether the clicked element is a card and if it's already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    // style the select card
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;

    // Checks if two cards have been selected 
    selectedCards.push(card);
    if (selectedCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

// evaluates whether the two selected cards match each other
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    }
    else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = []; //Resetting selection cards
}



// Resets the game, shuffles cards, and starts a timer.
function startGame() {
    let timeLeft = 60;
    startbtn.disabled = true;

    score = 0; // reset score to 0
    scoreElement.textContent = `Score: ${score}`;

    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}


function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
        }

    }, 1000);
}


startbtn.addEventListener('click', startGame);