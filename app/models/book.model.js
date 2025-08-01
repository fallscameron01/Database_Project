module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    cover_art: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    platform_name: {
      type: Sequelize.STRING
    },
    platform_link: {
      type: Sequelize.STRING
    }
  });

  return Book;
};