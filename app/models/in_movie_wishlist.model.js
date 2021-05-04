module.exports = (sequelize, Sequelize) => {
  const InMovieWishlist = sequelize.define("in_movie_wishlist", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InMovieWishlist;
};