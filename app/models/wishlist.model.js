module.exports = (sequelize, Sequelize) => {
  const Wishlist = sequelize.define("wishlist", {
    username: {
      type: Sequelize.STRING
    },
    number_of_items: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  });

  return Wishlist;
};