const express = require('express');

const router = express.Router();

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

// Define a route to get all books
router.get("/", (req, res) => {
    res.send(books);
});

// Define a route to get a book by ID
router.get("/:bookId", (req, res) => {
    const {bookId}  = req.params;
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) {
        return res.send("Book not found").status(404);
    }

    res.json(book);
});

module.exports = router;