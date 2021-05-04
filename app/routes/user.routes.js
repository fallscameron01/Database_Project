module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", user.createUser);

  // Delete a user
  router.delete("/:username", user.deleteUser);

  // Get all users
  router.get("/", user.findAll);

  app.use('/api/user', router);
};