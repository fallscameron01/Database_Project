const db = require("../models");
const VideoGame = db.video_game;
const InVideoGameLibrary = db.in_video_game_library;
const InVideoGameWishlist = db.in_video_game_wishlist;
const Op = db.Sequelize.Op;

// Add video_game
exports.addVideoGame = (req, res) => {
  const location = req.params.location;

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const video_game = {
    title: req.body.title,
    cover_art: req.body.cover_art,
    author: req.body.author
  };

  // Save VideoGame in the database
  VideoGame.create(video_game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the video_game."
      });
    });

  const video_game_location = {
    username: req.body.username,
    title: req.body.title
  };

  if (location === "library") {
    InVideoGameLibrary.create(video_game_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the video_game."
      });
    });
  }
  else {
    InVideoGameWishlist.create(video_game_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the video_game."
      });
    });
  }
};

// Find all video_games
exports.findAllVideoGames = (req, res) => {
  const location = req.params.location;
  
  if (location === "library") {
    InVideoGameLibrary.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  }
  else {
    InVideoGameWishlist.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  }
};

// Find VideoGame
exports.findVideoGame = (req, res) => {
  const title = req.params.title;

  VideoGame.findByPk(title)
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

// Modify video_game
exports.update = (req, res) => {
  const title = req.params.title;

  VideoGame.update(req.body, {
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VideoGame was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update video_game with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with title=" + title
      });
    });
};