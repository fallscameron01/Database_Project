module.exports = (sequelize, Sequelize) => {
  const InBookLibrary = sequelize.define("in_book_library", {
    username: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return InBookLibrary;
};