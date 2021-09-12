let myLibrary = [];
let table = document.querySelector('#bookTable > tbody');
let addBookButton = document.querySelector('#addBookButton');
let bookSubmitBtn = document.querySelector('.btn');
let titleText = document.querySelector('#title');
let authorText = document.querySelector('#author'); 
let numPagesText = document.querySelector('#pages');
let read = document.querySelector('#read');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addToLibrary(book) {
	myLibrary.push(book);
}

function displayBooks() {
	let newRow = table.insertRow();
	let newNameCell = newRow.insertCell();
	let newAuthorCell = newRow.insertCell();

	let newName = document.createTextNode(myLibrary[myLibrary.length - 1].title);
	newNameCell.appendChild(newName);
	let newAuthor = document.createTextNode(myLibrary[myLibrary.length - 1].author);
	newAuthorCell.appendChild(newAuthor);
}

function openForm() {
	document.querySelector('.form-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('.form-popup').style.display = 'none';
	document.querySelector('.form-container').reset();
}

addBookButton.addEventListener('click', openForm);
bookSubmitBtn.addEventListener('click', () => {
	const book = new Book(titleText.value, authorText.value, numPagesText.textContent, read.checked);
	addToLibrary(book);
	closeForm();
	displayBooks();
})