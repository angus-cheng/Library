let myLibrary = [];
let table = document.querySelector('#bookTable > tbody');
let addBookButton = document.querySelector('#addBookButton');

function Book(title) {
	this.title = title;
}

function addToLibrary(book) {
	myLibrary.push(book);
}

function displayBooks() {
	console.log(myLibrary);

	let newRow = table.insertRow();
	let newCell = newRow.insertCell();
	let newText = document.createTextNode(`${myLibrary[myLibrary.length - 1].title}`);
	newCell.appendChild(newText);
}

function addBook() {
	const book = new Book(window.prompt('What book to add?'));
	addToLibrary(book);
	displayBooks();
}

addBookButton.addEventListener('click', addBook);
