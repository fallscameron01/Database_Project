module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", user.createUser);

  // Get all users
  router.get("/", user.findAll);

  app.use('/api/user', router);
};