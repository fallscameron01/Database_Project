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
    },
    genre: {
      type: Sequelize.STRING
    },
    platform_name: {
      type: Sequelize.STRING
    },
    platform_link: {
      type: Sequelize.STRING
    }
  });

  return Music;
};