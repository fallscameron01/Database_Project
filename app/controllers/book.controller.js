const db = require("../models");
const Book = db.book;
const InBookLibrary = db.in_book_library;
const InBookWishlist = db.in_book_wishlist;
const Op = db.Sequelize.Op;

// Add book
exports.addBook = (req, res) => {
  const location = req.params.loaction;

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const book = {
    title: req.body.title,
    cover_art: req.body.cover_art,
    author: req.body.author
  };

  // Save User in the database
  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });

  const book_location = {
    username: req.body.username,
    title: req.body.title
  };

  if (location === "library") {
    InBookLibrary.create(book_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
  }
  else {
    InBookWishlist.create(book_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
  }
};

// Find Book
exports.findBook = (req, res) => {
  const title = req.params.title;

  Book.findByPk(title)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Modify book
exports.update = (req, res) => {
  const title = req.params.title;

  Book.update(req.body, {
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update book with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with title=" + title
      });
    });
};