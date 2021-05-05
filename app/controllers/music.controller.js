const db = require("../models");
const Music = db.music;
const InMusicLibrary = db.in_music_library;
const InMusicWishlist = db.in_music_wishlist;
const Op = db.Sequelize.Op;

// Add music to library
exports.addMusicToLibrary = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const music = {
    title: req.body.title,
    album_art: req.body.album_art,
    artist: req.body.artist,
    genre: req.body.genre,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  
  Music.create(music)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });

  const music_location = {
    username: req.body.username,
    title: req.body.title
  };

  InMusicLibrary.create(music_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the user."
    });
  });
};

// Add music to Wishlist
exports.addMusicToWishlist = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const music = {
    title: req.body.title,
    album_art: req.body.album_art,
    artist: req.body.artist,
    genre: req.body.genre,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  Music.create(music)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });

  const music_location = {
    username: req.body.username,
    title: req.body.title
  };

  InMusicWishlist.create(music_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the user."
    });
  });
};

// Find all musics in Library
exports.findAllMusicsInLibrary = (req, res) => {  
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
};

// Find all musics in Wishlist
exports.findAllMusicsInWishlist = (req, res) => {  
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

// Modify Music
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