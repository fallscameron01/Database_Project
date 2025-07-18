module.exports = app => {
  const music = require("../controllers/music.controller.js");

  var router = require("express").Router();

  // Add music to library
  router.post("/library", music.addMusicToLibrary);

  // Add music to wishlist
  router.post("/wishlist", music.addMusicToWishlist);

  // Modify music
  router.put("/:title", music.update);

  // Get all musics in library
  router.get("/library", music.findAllMusicsInLibrary);

  // Get all musics in library
  router.get("/wishlist", music.findAllMusicsInWishlist);

  // Find music by title
  router.get("/:title", music.findMusic);

  // Delete music by title
  router.delete("/:title", music.delete);

  // Count music in library
  router.get("/library/count", music.countMusicsInLibrary);

  // Count music in wishlist
  router.get("/wishlist/count", music.countMusicsInWishlist);

  app.use('/api/music', router);
};