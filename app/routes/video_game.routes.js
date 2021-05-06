module.exports = app => {
  const video_game = require("../controllers/video_game.controller.js");

  var router = require("express").Router();

  // Add video game to library
  router.post("/library", video_game.addVideoGameToLibrary);

  // Add video game to wishlist
  router.post("/wishlist", video_game.addVideoGameToWishlist);

  // Modify video game
  router.put("/:title", video_game.update);

  // Get all video games in library
  router.get("/library", video_game.findAllVideoGamesInLibrary);

  // Get all video games in library
  router.get("/wishlist", video_game.findAllVideoGamesInWishlist);

  // Find video game by title
  router.get("/:title", video_game.findVideoGame);

  // Delete video game by title
  router.delete("/:title", video_game.delete);

  app.use('/api/video_game', router);
};