// Importing the express module
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Importing the routers
const bookRouter = require("./routes/books");
const  userRouter  = require("./routes/users");

// Create an instance of express
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(morgan("combined"));

const PORT = process.env.PORT || 5000;

// Middleware to use routers
app.use("/books", bookRouter);
app.use("/auth", userRouter);

// Use CORS middleware to allow cross-origin requests

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
