module.exports = (sequelize, Sequelize) => {
  const InVideoGameWishlist = sequelize.define("in_video_game_wishlist", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InVideoGameWishlist;
};