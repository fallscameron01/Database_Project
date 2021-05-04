module.exports = (sequelize, Sequelize) => {
  const Music = sequelize.define("music", {
    title: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    album_art: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    }
  });

  return Music;
};