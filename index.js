let myLibrary = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBookToLibrary(book) {
    const table = document.getElementById("bookTable");

    const row = table.insertRow(1);

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pageNumCell = row.insertCell(2);
    const readCell = row.insertCell(3);

    titleCell.innerText = book.title; 
    authorCell.innerText = book.author;
    pageNumCell.innerText = book.pageNum;
    readCell.innerText = book.read;
}

function showForm() {
    const form = document.getElementById("formElement");
    form.style.display = "block";

    document.getElementById("newBookBtn").style.display = "none";
}

function getData(form) {
    const formData = new FormData(form);

    const entries = Object.fromEntries(formData);
    const book = new Book(entries.title, entries.author, entries.pageNum, 
            entries.read);
    console.log(book);
    addBookToLibrary(book);
}

document.getElementById("formElement").addEventListener("submit", (e) => {
    e.preventDefault();
    getData(e.target);
})
