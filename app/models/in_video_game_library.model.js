module.exports = (sequelize, Sequelize) => {
  const InVideoGameLibrary = sequelize.define("in_video_game_library", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InVideoGameLibrary;
};