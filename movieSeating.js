// js for booking seats
// 'o' represent available seats
// 'x' represent booked seats
const theaterSeats = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
];

// function bookSeat(row, col, element) {
function bookSeat(row, col) {

    if (theaterSeats[row][col] === 'o') {
        theaterSeats[row][col] = 'x';

        updateSeatStatus(row, col);
        // another way
        // element.classList.add('booked');
        // element.classList.remove('available');


        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked.`)
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`)
    }

}

function updateSeatStatus(row, col) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add('booked');
}

function bookRandomSeat() {
    const availableSeats = [];

    // get all available seats
    for (let row = 0; row < theaterSeats.length; row++) {

        for (let col = 0; col < theaterSeats[row].length; col++) {
            if (theaterSeats[row][col] === 'o') {
                availableSeats.push({ row, col });
            }
        }

    }

    if (availableSeats.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        console.log(randomIndex);

        const { row, col } = availableSeats[randomIndex];
        bookSeat(row, col);


    } else {
        alert('all seats are already booked');
    }

}