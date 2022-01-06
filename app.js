// Book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author; 
    this.isbn = isbn;

}


// UI constructor

function UI(){}

// add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create an element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row);

}

// show alert 
UI.prototype.showAlert = function(message, className) {

    // create div

    const div = document.createElement('div');

    // add classes 

    div.className = `alert ${className}`;
    // add text 
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec 
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000);

}

UI.prototype.showSuccess = function(message, className) {

    // create div

    const div = document.createElement('div');

    // add classes 

    div.className = `alert ${className}`;
    // add text 
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec 
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000);

}


// delete book 
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};  


// clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// Event listener for submit

document.getElementById('book-form').addEventListener('submit', 
    function(e){

    // get form values    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;


    // instantiating book
    const book = new Book(title, author, isbn);

    // instantiate UI Object 

    const ui = new UI();

    // Validate 

    if(title === '' || author === '' || isbn === '') {
        // Error alert 
        ui.showAlert('Please fill in all Fields', 'error');

    } else {

        // add book to list 
        ui.addBookToList(book);

        //show success 
        ui.showSuccess('Book added', 'success')

        // clear fields
        ui.clearFields();

    }

    e.preventDefault();
});

// event listener delete 

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();


    // delete book 
    ui.deleteBook(e.target);

    // show alert 

    ui.showAlert('Book removed', 'success');

    console.log('123')
    e.preventDefault();
});


 