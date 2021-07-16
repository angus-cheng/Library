let myLibrary = [];
let table = document.querySelector('#bookTable > tbody');
let addBookButton = document.querySelector('#addBookButton');

function Book(title) {
	this.title = title;
	this.author = undefined;
	this.pages = undefined;
	this.read = undefined;
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
	openForm();
	addToLibrary(book);
	displayBooks();
	closeForm();
}

function openForm() {
	document.querySelector('.form-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('.form-popup').style.display = 'none';
	document.querySelector('.form-popup').reset();
}

addBookButton.addEventListener('click', addBook);
