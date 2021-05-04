module.exports = (sequelize, Sequelize) => {
  const Library = sequelize.define("library", {
    username: {
      type: Sequelize.STRING
    },
    number_of_items: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  });

  return Library;
};