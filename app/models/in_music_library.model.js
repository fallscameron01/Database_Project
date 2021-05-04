module.exports = (sequelize, Sequelize) => {
  const InMusicLibrary = sequelize.define("in_music_library", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InMusicLibrary;
};