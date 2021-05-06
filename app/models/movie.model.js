module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    title: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    box_art: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    platform_name: {
      type: Sequelize.STRING
    },
    platform_link: {
      type: Sequelize.STRING
    }
  });

  return Movie;
};