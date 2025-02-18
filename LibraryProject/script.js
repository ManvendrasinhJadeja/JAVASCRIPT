const title = document.getElementById("title");
const url = document.getElementById("url");
const author = document.getElementById("author");
const search = document.getElementById("search");
var search_Result = document.getElementById("search_Result");
const submit = document.getElementById("submit");
const display = document.getElementById("display");

class books {
  constructor(title, url, author) {
    this.title = title;
    this.author = author;
    this.url = url;
  }
}

books_Data = [
  new books(
    "The Great Gatsby",
    "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL._AC_UL1000_.jpg",
    "F. Scott Fitzgerald"
  ),
  
  new books(
    "To Kill a Mockingbird",
    "https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF1000,1000_QL80_.jpg",
    "Harper Lee"
  ),
  
  new books(
    "1984",
    "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    "George Orwell"
  ),
  
  new books(
    "The Catcher in the Rye",
    "https://mirrorwithclouds.wordpress.com/wp-content/uploads/2017/07/catcher.jpg",
    "J.D. Salinger"
  ),
  

  
  new books(
    "The Hobbit",
    "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    "J.R.R. Tolkien"
  ),
  
  new books(
    "War and Peace",
    "https://m.media-amazon.com/images/I/51mkP3asfJL._SL240_.jpg",
    "Leo Tolstoy"
  ),
  
  new books(
    "Crime and Punishment",
    "https://covers.shakespeareandcompany.com/97818402/9781840228564.jpg",
    "Fyodor Dostoevsky"
  ),
  
  new books(
    "The Alchemist",
    "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    "Paulo Coelho"
  )
];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const title_value = title.value.toLowerCase().trim();
  const url_value = url.value;

  const author_value = author.value.toLowerCase().trim();

  let addBook = new books(title_value.toLowerCase().trim(), url_value, author_value.toLowerCase().trim());
  books_Data.push(addBook);
  create_Card();

  title.value = "";
  url.value = "";
  author.value = "";
});


function create_Card(books = books_Data) {
  display.innerHTML = ""; 

  books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card_Style");
    card.innerHTML = `
      <img src="${book.url}" alt="">
      <div class="card_Text">
        <h3 class="card_Title">${book.title}</h3>
        <p class="card_Author">${book.author}</p>
      </div>`;
    display.appendChild(card);
  });
}

function create_Result(abc) {
  const result = document.createElement("div");

  create_Card();

  result.classList.add("result");
  search_Result.classList.add("result_padding");
  result.innerHTML = `${abc}`;
  search_Result.appendChild(result);
}

search.addEventListener("input", function () {
  search_Result.replaceChildren();
  search_Result.style.display = "flex";


  for (let i = 0; i < books_Data.length; i++) {
    if (
      books_Data[i].title.includes(search.value) ||
      books_Data[i].author.includes(search.value)
    ) {
      create_Result(books_Data[i].title);
    }

    if (search.value == "") {
      search_Result.replaceChildren();
      search_Result.classList.remove("result_Toggle");
      search_Result.classList.remove("result_padding");
    }

  }
  books_Data.forEach(e => {
    if (
      e.title.includes(search.value.toLowerCase().trim()) ||
      e.author.includes(search.value.toLowerCase().trim())
    ) {
      create_Result(e.title);
    }

    if (search.value == "") {
      search_Result.replaceChildren();
      search_Result.classList.remove("result_Toggle");
      search_Result.classList.remove("result_padding");
    }

  });


  const search_value = search.value.toLowerCase().trim();
  const filteredBooks = books_Data.filter(function(book) {
    return book.title.toLowerCase().includes(search_value) || 
           book.author.toLowerCase().includes(search_value);
  });

  create_Card(filteredBooks); 

});
