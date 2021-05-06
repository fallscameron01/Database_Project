const db = require("../models");
const bookModel = require("../models/book.model");
const Book = db.book;
const InBookLibrary = db.in_book_library;
const InBookWishlist = db.in_book_wishlist;
const Op = db.Sequelize.Op;

// Add book to library
exports.addBookToLibrary = (req, res) => {
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
    author: req.body.author,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  // Save User in the database
  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the book."
      });
    });

  const book_location = {
    username: req.body.username,
    title: req.body.title
  };

  InBookLibrary.create(book_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the book."
    });
  });
};

// Add book to Wishlist
exports.addBookToWishlist = (req, res) => {
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
    author: req.body.author,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  // Save User in the database
  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the book."
      });
    });

  const book_location = {
    username: req.body.username,
    title: req.body.title
  };

  InBookWishlist.create(book_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the book."
    });
  });
};

// Remove book from library
exports.removeBookFromLibrary = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InBookLibrary.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was removed from library successfully."
        });
      } else {
        res.send({
          message: `Cannot remove book with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing book with title=" + title
      });
    });
};

// Remove book from wishlist
exports.removeBookFromWishlist = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InBookWishlist.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was removed from wishlist successfully."
        });
      } else {
        res.send({
          message: `Cannot remove book with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing book with title=" + title
      });
    });
};

// Find all books in Library
exports.findAllBooksInLibrary = (req, res) => {  
  InBookLibrary.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving books."
    });
  });
};

// Find all books in Wishlist
exports.findAllBooksInWishlist = (req, res) => {  
  InBookWishlist.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving books."
    });
  });
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
          err.message || "Some error occurred while retrieving books."
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
        message: "Error updating book with title=" + title
      });
    });
};

// Delete Book
exports.delete = (req, res) => {
  const title = req.params.title;

  Book.destroy({
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id
      });
    });
};


// Count all books in library
exports.countBooksInLibrary = (req, res) => {  
  InBookLibrary.count()
  .then(data => {
    res.send({"count": data});
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error"
    });
  });
};

// Count all books in wishlist
exports.countBooksInWishlist = (req, res) => {  
  InBookWishlist.count()
  .then(data => {
    res.send({"count": data});
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error"
    });
  });
};
