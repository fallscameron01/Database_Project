module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define("genre", {
    title: {
      type: Sequelize.STRING
    },
    genre_name: {
      type: Sequelize.STRING
    }
  });

  return Genre;
};