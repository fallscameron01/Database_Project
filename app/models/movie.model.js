module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    title: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    box_art: {
      type: Sequelize.STRING
    },
    decription: {
      type: Sequelize.STRING
    }
  });

  return Movie;
};