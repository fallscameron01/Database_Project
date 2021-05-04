module.exports = (sequelize, Sequelize) => {
  const InMovieLibrary = sequelize.define("in_movie_library", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InMovieLibrary;
};