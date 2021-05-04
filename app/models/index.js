const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: '0',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.user = require("./library.model.js")(sequelize, Sequelize);
db.user = require("./wishlist.model.js")(sequelize, Sequelize);
db.user = require("./in_video_game_library.model.js")(sequelize, Sequelize);
db.user = require("./video_game.model.js")(sequelize, Sequelize);
db.user = require("./in_movie_library.model.js")(sequelize, Sequelize);
db.user = require("./movie.model.js")(sequelize, Sequelize);
db.user = require("./in_music_library.model.js")(sequelize, Sequelize);
db.user = require("./music.model.js")(sequelize, Sequelize);
db.user = require("./genre.model.js")(sequelize, Sequelize);
db.user = require("./in_book_library.model.js")(sequelize, Sequelize);
db.user = require("./book.model.js")(sequelize, Sequelize);
db.user = require("./platform.model.js")(sequelize, Sequelize);
db.user = require("./in_book_wishlist.model.js")(sequelize, Sequelize);
db.user = require("./in_movie_wishlist.model.js")(sequelize, Sequelize);
db.user = require("./in_music_wishlist.model.js")(sequelize, Sequelize);
db.user = require("./in_video_game_wishlist.model.js")(sequelize, Sequelize);

module.exports = db;