module.exports = app => {
  const movie = require("../controllers/movie.controller.js");

  var router = require("express").Router();

  // Add movie to library
  router.post("/library", movie.addMovieToLibrary);

  // Add movie to wishlist
  router.post("/wishlist", movie.addMovieToWishlist);

  // Modify movie
  router.put("/:title", movie.update);

  // Get all movies in library
  router.get("/library", movie.findAllMoviesInLibrary);

  // Get all movies in library
  router.get("/wishlist", movie.findAllMoviesInWishlist);

  // Find movie by title
  router.get("/:title", movie.findMovie);

  // Delete movie by title
  router.delete("/:title", movie.delete);

  // Count movies in library
  router.get("/library/count", movie.countMoviesInLibrary);

  // Count movies in wishlist
  router.get("/wishlist/count", movie.countMoviesInWishlist);

  app.use('/api/movie', router);
};