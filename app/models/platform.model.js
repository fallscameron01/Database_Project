module.exports = (sequelize, Sequelize) => {
  const Platform = sequelize.define("platform", {
    title: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    link: {
      type: Sequelize.STRING
    }
  });

  return Platform;
};