module.exports = (sequelize, Sequelize) => {
  const InBookWishlist = sequelize.define("in_book_wishlist", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InBookWishlist;
};