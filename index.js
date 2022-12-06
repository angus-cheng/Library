let myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    
    const table = document.getElementById('bookTable');
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    cell1.innerText = "New Cell"
}

addBookToLibrary();