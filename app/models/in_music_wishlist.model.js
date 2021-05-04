module.exports = (sequelize, Sequelize) => {
  const InMusicWishlist = sequelize.define("in_music_wishlist", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InMusicWishlist;
};