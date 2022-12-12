let myLibrary = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    const table = document.getElementById("bookTable");

    const row = table.insertRow(-1);

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pageNumCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const removeCell = row.insertCell(4);

    row.dataset.myLibraryIndex = myLibrary.length - 1;

    titleCell.innerText = book.title; 
    authorCell.innerText = book.author;
    pageNumCell.innerText = book.pageNum;
    readCell.innerText = book.read;

    const removeBtn = document.createElement("button");
    removeBtn.id = book.title;
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", e => {
        e.preventDefault();
        deleteRow(e);
    })
    removeCell.appendChild(removeBtn);
}

function deleteRow(row) {
    const td = row.target.parentNode;
    const tr = td.parentNode;
    tr.parentNode.removeChild(tr);
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
    addBookToLibrary(book);
}

document.getElementById("formElement").addEventListener("submit", (e) => {
    e.preventDefault();
    getData(e.target);
})
