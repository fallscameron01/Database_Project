const db = require("../models");
const Movie = db.movie;
const InMovieLibrary = db.in_movie_library;
const InMovieWishlist = db.in_movie_wishlist;
const Op = db.Sequelize.Op;

// Add movie
exports.addMovie = (req, res) => {
  const location = req.params.location;

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

  // Save Movie in the database
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

  if (location === "library") {
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
  }
  else {
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
  }
};

// Find all movies
exports.findAllMovies = (req, res) => {
  const location = req.params.location;
  
  if (location === "library") {
    InMovieLibrary.findAll()
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
    InMovieWishlist.findAll()
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
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Modify movie
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