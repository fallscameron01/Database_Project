const db = require("../models");
const Music = db.music;
const InMusicLibrary = db.in_music_library;
const InMusicWishlist = db.in_music_wishlist;
const Op = db.Sequelize.Op;

// Add music
exports.addMusic = (req, res) => {
  const location = req.params.location;

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const music = {
    title: req.body.title,
    cover_art: req.body.cover_art,
    author: req.body.author
  };

  // Save Music in the database
  Music.create(music)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the music."
      });
    });

  const music_location = {
    username: req.body.username,
    title: req.body.title
  };

  if (location === "library") {
    InMusicLibrary.create(music_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the music."
      });
    });
  }
  else {
    InMusicWishlist.create(music_location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the music."
      });
    });
  }
};

// Find all musics
exports.findAllMusics = (req, res) => {
  const location = req.params.location;
  
  if (location === "library") {
    InMusicLibrary.findAll()
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
    InMusicWishlist.findAll()
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

// Find Music
exports.findMusic = (req, res) => {
  const title = req.params.title;

  Music.findByPk(title)
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

// Modify music
exports.update = (req, res) => {
  const title = req.params.title;

  Music.update(req.body, {
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Music was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update music with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with title=" + title
      });
    });
};