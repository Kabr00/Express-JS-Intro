// Importing the express module
const express = require('express');
const cors = require('cors');

// Create an instance of express
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors({
    origin:'http://localhost:5173',
}));

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 7, title: "Fahrenheit 451", author: "Ray Bradbury" },
    { id: 8, title: "Brave New World", author: "Aldous Huxley" },
];

// Define a route for the root URL
app.get("/", (request, response) => {
    response.send("Hello world!");
});

// Define an endpoint to get all books
app.get("/books", (request, response) => {
    response.send(books);
});

// Define a PORT for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});