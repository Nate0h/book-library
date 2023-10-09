const myLibrary = [];

const book_display = document.querySelector(".book-container");

function Book(title, author, pages, read){
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read 
}

function addBookToLibrary(book){
    myLibrary.push(book);

}

function addBookToDisplay(book){
    let new_book = createBookWidget(book);
    book_display.appendChild(new_book);

}

function createBookWidget(book){

    let new_book = document.createElement("div");

    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");

    para1.textContent = book.title;
    para2.textContent = book.author;
    para3.textContent = book.pages;
    para4.textContent = book.read; 

    new_book.appendChild(para1);
    new_book.appendChild(para2);
    new_book.appendChild(para3);
    new_book.appendChild(para4);


    new_book.classList.add("card");
    console.log(new_book.classList);

    return new_book;

}



function displayBooks(myLibrary){
    for(i in myLibrary){
        let book = myLibrary[i];
        addBookToDisplay(book);
        console.log(myLibrary[i]);
    }
}

const book1 = new Book("Lakers", "Lebron James", 567, true);
const book2 = new Book("Life of a Rolling 60", "NeighborHood Nip", 294, true);
const book3 = new Book("Autobiography of Red Shirt", "Tra Rags", 106, false);
const book4 = new Book("The Realest N****a Alive", "Nate-O Jenkinz",432,false);



addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


displayBooks(myLibrary);



