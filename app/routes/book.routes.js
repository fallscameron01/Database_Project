module.exports = app => {
  const book = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Add book to library
  router.post("/library", book.addBookToLibrary);

  // Add book to wishlist
  router.post("/wishlist", book.addBookToWishlist);

  // Modify book
  router.put("/:title", book.update);

  // Get all books in library
  router.get("/library", book.findAllBooksInLibrary);

  // Get all books in library
  router.get("/wishlist", book.findAllBooksInWishlist);

  // Find book by title
  router.get("/:title", book.findBook);

  app.use('/api/book', router);
};