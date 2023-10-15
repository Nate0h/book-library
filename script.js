const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-modal");
const closeButton = document.querySelector("dialog button");
const form = document.querySelector("form");
const myLibrary = [];
const book_display = document.querySelector(".book-container");
const checkbox = document.querySelector("input[type='checkbox']");
const clear_all = document.querySelector(".clear-all");

clear_all.addEventListener("click",(e) => {
  while (book_display.hasChildNodes()){
  book_display.removeChild(book_display.firstChild);
  }
  myLibrary = [];
});

  checkbox.addEventListener("change",function(){
     this.value = this.checked ? true : false;
  });

showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
    form.reset();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    createBook();
     // Have to send the select box value here.
    dialog.close();
    form.reset();

  });




function Book(title, author, pages, read, index){
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read,
    this.index = index 
}

function addBookToLibrary(book){
    
    myLibrary.push(book);
    //need to add to display

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
    let read = document.createElement("button");
    read.setAttribute("id","toggle-read");
    let remove = document.createElement("button");
    remove.classList.add("removeBook");

    para1.textContent = book.title;
    para2.textContent = book.author;
    para3.textContent = book.pages;
    if(book.read){
      read.textContent = "Completed"
      read.classList.add("read");
    }
    else{
      read.textContent = "In Progress"; 
      read.classList.add("unread");
    }
  
    remove.textContent = "Remove";

  

    new_book.appendChild(para1);
    new_book.appendChild(para2);
    new_book.appendChild(para3);
    new_book.appendChild(read);
    new_book.appendChild(remove);
    

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

function createBook(){
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let pages = form.elements[2].value;
    let read = form.elements[4].value;
    let index = myLibrary.length;
    let new_book = new Book(title, author, pages, read, index);
    addBookToLibrary(new_book);
    addBookToDisplay(new_book);
}

//create a function that creates book object when form is filled out 
const book1 = new Book("Lakers", "Lebron James", 567, true,0);
const book2 = new Book("Life of a Rolling 60", "NeighborHood Nip", 294, true,1);
const book3 = new Book("Autobiography of Red Shirt", "Tra Rags", 106, false,2);
const book4 = new Book("The Realest N****a Alive", "Nate-O Jenkinz",432,false,3);



addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


displayBooks(myLibrary);

document.addEventListener("click", function(e){
  const target = e.target.closest(".removeBook");

  if(target){
  let value = e.target.parentElement.firstChild.textContent;
  //console.log(value);

  for(let i = 0; i < myLibrary.length; i++){
    if (myLibrary[i].title == value) myLibrary.splice(i,1);
  }
  e.target.parentElement.remove();
  }
})

document.addEventListener("click", function(e){
  const target = e.target.closest("#toggle-read");

  if(target){
    if(target.className == "read"){
      target.className = "unread";
      target.textContent = "In Progress";
    }
    else if(target.className == "unread"){
      target.className = "read";
      target.textContent = "Completed";
    }
  
  }
})






