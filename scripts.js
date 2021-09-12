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

	let removeBtnCell = newRow.insertCell();
	let removeBtn = document.createElement('BUTTON');
	removeBtn.textContent = 'X';
	removeBtn.dataset.index = myLibrary.length - 1;
	removeBtnCell.append(removeBtn);
	removeBtn.addEventListener('click', () => {
		myLibrary.splice(removeBtn.dataset.index, 1);
		table.deleteRow(removeBtn.dataset.index);
	})
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
	const book = new Book(titleText.value, authorText.value, numPagesText.value, read.checked);
	addToLibrary(book);
	closeForm();
	displayBooks();
});
