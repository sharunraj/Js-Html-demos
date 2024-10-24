
let allBooks = [
    { 
        bookId: 1,
        title: 'Harry Potter - Order of the Phoenix',
        bookAuthor: {
            authorId: 1,
            firstName: 'J.K.',
            lastName: 'Rowling'
        },
        bookPrice: 4000, 
        publicationYear: 2000 ,
        bookImage: "https://3.bp.blogspot.com/-jiBejiz0F70/UaqJn5-iZ7I/AAAAAAAABuc/yiJHXberqfM/s1600/BOOK_Harry+Potter+and+the+Order+of+the+Phoenix.jpg",

    },
    {
        bookId: 2,
        title: 'To Kill a Mockingbird',
        bookAuthor: {
            authorId: 2,
            firstName: 'Harper Lee',
            lastName: 'Lee'
        },
        bookPrice: 2500,
        publicationYear: 1960,
        bookImage: "https://media.glamour.com/photos/56e1f3c4bebf143c52613c04/master/w_1024,c_limit/entertainment-2016-02-12-main.jpg",
    },
    {
        bookId:3,
        title: 'Pride and Prejudice',
        bookAuthor: {
            authorId: 3,
            firstName: 'Jane Austen',
            lastName: 'Austen'
        },
        bookPrice: 2000,
        publicationYear: 1813,
        bookImage: "https://th.bing.com/th/id/R.cbc618e6124733685075ec31dea1e814?rik=B6%2f6rTvwUc4%2fYg&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781499369748_p0_v3_s1200x630.jpg&ehk=7qZHHjK2JIDUvrFH5Wf2JZA04AQ7dpzDWVg9ugSp1lA%3d&risl=&pid=ImgRaw&r=0",
    }
];

let allAuthors = [
    {
        authorId: 1,
        firstName: 'J.K.',
        lastName: 'Rowling'
    },
    {
        authorId: 2,
        firstName: 'Harper Lee',
        lastName: 'Lee'
    },
    {
        authorId: 3,
        firstName: 'Jane Austen',
        lastName: 'Austen'
    }
]

function loadAllBooks(){
    let content = ``;
    allBooks.forEach((book) => {
        content += `<tr>`;
        content += `<td class="text-center">${book.bookId}</td>`;
        content += `<td class="text-center"><img src=${book.bookImage} class="img-thumbnail" width="100" height="150"/></td>`;
        content += `<td class="text-center">${book.title}</td>`;
        // content += `<td>${book.bookAuthor.firstName} ${book.bookAuthor.lastName}</td>`;
        // content += `<td>${book.bookPrice}</td>`;
        content += `<td class="text-center"><button onclick="loadABook(${book.bookId})" class="btn btn-warning">View</button></td>`;
        content += `<td class="text-center"><button onclick="editBook(${book.bookId})" class="btn btn-primary">Edit</button></td>`;
        content += `<td class="text-center"><button onclick="deleteBook(${book.bookId})" class="btn btn-danger">Delete</button></td>`; 
        content += `</tr>`;

    });


    document.getElementById("book-list").innerHTML = content;

}


function loadABook(bookId) {
    let content = ``;
  
    allBooks.forEach((book) => {
        if (book.bookId === bookId) {
            content += `
                <div class="card mb-3" style="max-width: 800px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img class="img-fluid rounded-start" src="${book.bookImage}" alt="Book Image" style="max-height: 250px; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">BookId: ${book.bookId}</p>
                                <p class="card-text">Author: ${book.bookAuthor.firstName} ${book.bookAuthor.lastName}</p>
                                <p class="card-text">Publication Year: ${book.publicationYear}</p>
                                <p class="card-text">Price: ${book.bookPrice}</p>
                                <button onclick="deleteBook(${book.bookId})" class="btn btn-danger">Delete</button>
                                <button onclick="editBook(${book.bookId})" class="btn btn-warning">Edit</button>
                                <button onclick="closeView()" class="btn btn-secondary">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    });

    document.getElementById("view").innerHTML = content;
}



function addBook(){

}

function deleteBook(bookId){
    // Implement delete book logic
    allBooks = allBooks.filter(book => book.bookId!== bookId);
    loadAllBooks();
}

function editBook(bookId){

}

function closeView(){
    document.getElementById("view").innerHTML = "";
}
document.addEventListener('DOMContentLoaded', function () {
  const toggleAddFormBtn = document.getElementById('toggleAddFormBtn');
    if (toggleAddFormBtn) {
        toggleAddFormBtn.addEventListener('click', () => {
            const form = document.getElementById('addBookForm');
            if (form) {
                form.style.display = form.style.display === 'none' ? 'block' : 'none';
            } else {
                console.error('Form with id "addBookForm" not found.');
            }
        });
    } else {
        console.error('Button with id "toggleAddFormBtn" not found.');
    }

    // Function to handle adding a new book
    const newBookForm = document.getElementById('newBookForm');
    if (newBookForm) {
        newBookForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            const newBook = {
                bookId: allBooks.length + 1, // Generate a new book ID
                title: document.getElementById('bookTitle').value,
                bookAuthor: {
                    firstName: document.getElementById('bookAuthorFirstName').value,
                    lastName: document.getElementById('bookAuthorLastName').value
                },
                bookPrice: parseFloat(document.getElementById('bookPrice').value), // Convert price to a number
                bookImage: document.getElementById('bookImage').value,
                publicationYear: parseFloat(document.getElementById('publicationYear').value) // Optionally add the current year
            };

            allBooks.push(newBook); // Add the new book to the allBooks array
            loadAllBooks(); // Reload the book list

            // Clear the form and hide it after submission
            newBookForm.reset(); // Reset form fields
            document.getElementById('addBookForm').style.display = 'none'; // Hide form
        });
    } else {
        console.error('Form with id "newBookForm" not found.');
    }

    loadAllBooks(); // Load initial book list
});