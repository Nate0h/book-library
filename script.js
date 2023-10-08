const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read 
}

function addBookToLibrary(book){
    myLibrary.push(book);
    
}

const book1 = new Book("Lakers", "Lebron James", 567, true);
const book2 = new Book("Life of a Rolling 60", "NeighborHood Nip", 294, true);
const book3 = new Book("Autobiography of Red Shirt", "Tra Rags", 106, false);
const book4 = new Book("The Realest N****a Alive", "Nate-O Jenkinz",432,false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

console.log(myLibrary[0].title);