module.exports = app => {
  const tutorials = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", user.createUser);

  app.use('/api/user', router);
};