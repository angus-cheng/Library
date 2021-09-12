let myLibrary = [];
const table = document.querySelector('#bookTable > tbody');
const addBookButton = document.querySelector('#addBookButton');
const bookSubmitBtn = document.querySelector('.btn');
const titleText = document.querySelector('#title');
const authorText = document.querySelector('#author'); 
const numPagesText = document.querySelector('#pages');
const read = document.querySelector('#read');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function() {
	if (this.read == false) {
		this.read = true;
	} else {
		this.read = false;
	}
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

	addRemoveBtn(newRow);

	let readCheckCell = newRow.insertCell();
	let readCheck = document.createElement('input');
	readCheck.type = 'checkbox';
	readCheck.dataset.index = myLibrary.length - 1;
	readCheckCell.append(readCheck);

	readCheck.addEventListener('change', () => {
		myLibrary[table.rows.length - 1].toggleRead();
	});

	populateStorage();
}

function addRemoveBtn(row) {
	let removeBtnCell = row.insertCell();
	let removeBtn = document.createElement('button');
	removeBtn.textContent = 'X';
	removeBtn.dataset.index = myLibrary.length - 1;
	removeBtnCell.append(removeBtn);

	removeBtn.addEventListener('click', () => {
		myLibrary.splice(removeBtn.dataset.index, 1);
		table.deleteRow(removeBtn.dataset.index);
	});
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

// Local storage
function populateStorage() {
	localStorage.setItem('library', JSON.stringify(myLibrary));
}

function setLibrary() {
	const books = JSON.parse(localStorage.getItem('library'));
	if(books.length > 0) {
		books.forEach(book => {
			addToLibrary(book);
			displayBooks();
		});
	}
}

if (!localStorage.getItem('library')) {
	populateStorage();
} else {
	setLibrary();
}
