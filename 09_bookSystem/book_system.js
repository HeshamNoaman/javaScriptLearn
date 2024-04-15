
let books = [];
let bookIndex = -1;

const bookName = document.getElementById("bookName");
const authorName = document.getElementById("authorName");
const bookDescription = document.getElementById("bookDescription");
const pagesNumber = document.getElementById("pagesNumber");
const booksContainer = document.getElementById('books');

// for add button
const addButton = document.getElementById("addButton");

// Attach event listener to addButton
addButton.addEventListener("click", function () {
    addBook(); // Call addBook without any arguments
});

function addBook() {
    const name = bookName.value;
    const author = authorName.value;
    const description = bookDescription.value;
    const pageNo = pagesNumber.value;

    if (name && author && description && !isNaN(pageNo)) {

        // create an object literal to save book data
        const book = {
            name: name,
            author_name: author,
            book_description: description,
            pages_number: pageNo
        }

        if (bookIndex >= 0) {
            // update the existing book
            books[bookIndex] = book;
            bookIndex = -1;
        } else {
            // add book object to books array
            books.push(book);
        }

        // display all books
        showBooks();
        // clear inputs value
        clearInputs()
    }
    else {
        alert('Please fill in all fields correctly.');
    }

}

function clearInputs() {
    bookName.value = "";
    authorName.value = "";
    bookDescription.value = "";
    pagesNumber.value = "";
}

function showBooks() {
    const booksDiv = books.map((book, index) => {
        return `<h1>book Number: ${index + 1}</h1>
          <p><strong>Book Name: </strong>${book.name}</p>
          <p><strong>Author Name:</strong> ${book.author_name} </p>
          <p><strong>Book Description:</strong> ${book.book_description}</p>
          <p><strong>No. of Pages:</strong> ${book.pages_number} mins</p>
          <button onclick="deleteBook(${index})">Delete</button>
          <button onclick="editBook(${index})">Edit</button>
          <hr>`
    }).join('');

    booksContainer.innerHTML = booksDiv;

}

function deleteBook(index) {
    books.splice(index, 1);
    // display all books
    if (books.length > 0) {
        showBooks();
    }

}

function editBook(index) {
    const { name, author_name, book_description, pages_number } = books[index];

    // fills input with old data
    bookName.value = name;
    authorName.value = author_name;
    bookDescription.value = book_description;
    pagesNumber.value = pages_number;

    bookIndex = index;
}