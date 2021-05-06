const db = require("../models");
const VideoGame = db.video_game;
const InVideoGameLibrary = db.in_video_game_library;
const InVideoGameWishlist = db.in_video_game_wishlist;
const Op = db.Sequelize.Op;

// Add video game to library
exports.addVideoGameToLibrary = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const video_game = {
    title: req.body.title,
    box_art: req.body.box_art,
    description: req.body.description,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };
  
  VideoGame.create(video_game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the video game."
      });
    });

  const video_game_location = {
    username: req.body.username,
    title: req.body.title
  };

  InVideoGameLibrary.create(video_game_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the video game."
    });
  });
};

// Add video game to Wishlist
exports.addVideoGameToWishlist = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const video_game = {
    title: req.body.title,
    box_art: req.body.box_art,
    description: req.body.description,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  VideoGame.create(video_game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the video game."
      });
    });

  const video_game_location = {
    username: req.body.username,
    title: req.body.title
  };

  InVideoGameWishlist.create(video_game_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the video game."
    });
  });
};


// Remove videogame from library
exports.removeVideoGameFromLibrary = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InVideoGameLibrary.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VideoGame was removed from library successfully."
        });
      } else {
        res.send({
          message: `Cannot remove videogame with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing videogame with title=" + title
      });
    });
};

// Remove videogame from wishlist
exports.removeVideoGameFromWishlist = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InVideoGameWishlist.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VideoGame was removed from wishlist successfully."
        });
      } else {
        res.send({
          message: `Cannot remove videogame with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing videogame with title=" + title
      });
    });
};

// Find all video games in Library
exports.findAllVideoGamesInLibrary = (req, res) => {  
  InVideoGameLibrary.findAndCountAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving video games."
    });
  });
};

// Find all video games in Wishlist
exports.findAllVideoGamesInWishlist = (req, res) => {  
  InVideoGameWishlist.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving video games."
    });
  });
};

// Find Video Games
exports.findVideoGame = (req, res) => {
  const title = req.params.title;

  VideoGame.findByPk(title)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving video games."
      });
    });
};

// Modify Video Game
exports.update = (req, res) => {
  const title = req.params.title;

  VideoGame.update(req.body, {
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Video game was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update video game with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating video game with title=" + title
      });
    });
};


// Delete Video Game
exports.delete = (req, res) => {
  const title = req.params.title;

  VideoGame.destroy({
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Video Game was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Video Game with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Video Game with title=" + title
      });
    });
};

// Count all video games in library
exports.countVideoGamesInLibrary = (req, res) => {  
  InVideoGameLibrary.count()
  .then(data => {
    res.send({"count": data});
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error"
    });
  });
};

// Count all video games in wishlist
exports.countVideoGamesInWishlist = (req, res) => {  
  InVideoGameWishlist.count()
  .then(data => {
    res.send({"count": data});
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error"
    });
  });
};