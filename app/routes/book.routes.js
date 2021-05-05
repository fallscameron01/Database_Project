module.exports = app => {
  const book = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Add book to library
  router.post("/:library", book.addBook);

  // Add book to wishlist
  router.post("/:wishlist", book.addBook);

  // Modify book
  router.put("/:title", book.update);

  // Find book by title
  router.get("/:title", book.findBook);

  app.use('/api/book', router);
};