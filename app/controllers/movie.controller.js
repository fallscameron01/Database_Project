const db = require("../models");
const Movie = db.movie;
const InMovieLibrary = db.in_movie_library;
const InMovieWishlist = db.in_movie_wishlist;
const Op = db.Sequelize.Op;

// Add movie to library
exports.addMovieToLibrary = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const movie = {
    title: req.body.title,
    box_art: req.body.box_art,
    description: req.body.description,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the movie."
      });
    });

  const movie_location = {
    username: req.body.username,
    title: req.body.title
  };

  InMovieLibrary.create(movie_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the movie."
    });
  });
};

// Add movie to Wishlist
exports.addMovieToWishlist = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const movie = {
    title: req.body.title,
    box_art: req.body.box_art,
    description: req.body.description,
    platform_name: req.body.platform_name,
    platform_link: req.body.platform_link
  };

  Movie.create(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the movie."
      });
    });

  const movie_location = {
    username: req.body.username,
    title: req.body.title
  };

  InMovieWishlist.create(movie_location)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the movie."
    });
  });
};


// Remove movie from library
exports.removeMovieFromLibrary = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InMovieLibrary.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was removed from library successfully."
        });
      } else {
        res.send({
          message: `Cannot remove movie with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing movie with title=" + title
      });
    });
};

// Remove movie from wishlist
exports.removeMovieFromWishlist = (req, res) => {
  const title = req.params.title;
  const username = req.body.username;

  InMovieWishlist.destroy(req.body, {
    where: { title: title, username: username}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was removed from wishlist successfully."
        });
      } else {
        res.send({
          message: `Cannot remove movie with title=${title} for username=${username}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error removing movie with title=" + title
      });
    });
};

// Find all movies in Library
exports.findAllMoviesInLibrary = (req, res) => {  
  InMovieLibrary.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving movies."
    });
  });
};

// Find all movies in Wishlist
exports.findAllMoviesInWishlist = (req, res) => {  
  InMovieWishlist.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving movies."
    });
  });
};

// Find Movie
exports.findMovie = (req, res) => {
  const title = req.params.title;

  Movie.findByPk(title)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movies."
      });
    });
};

// Modify Movie
exports.update = (req, res) => {
  const title = req.params.title;

  Movie.update(req.body, {
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update movie with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with title=" + title
      });
    });
};

// Delete Movie
exports.delete = (req, res) => {
  const title = req.params.title;

  Movie.destroy({
    where: { title: title }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Movie with title=${title}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Movie with title=" + title
      });
    });
};