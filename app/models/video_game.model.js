module.exports = (sequelize, Sequelize) => {
  const VideoGame = sequelize.define("video_game", {
    title: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    box_art: {
      type: Sequelize.STRING
    },
    decription: {
      type: Sequelize.STRING
    },
    platform_name: {
      type: Sequelize.STRING
    },
    platform_link: {
      type: Sequelize.STRING
    }
  });

  return VideoGame;
};