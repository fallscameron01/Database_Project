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
db.library = require("./library.model.js")(sequelize, Sequelize);
db.wishlist = require("./wishlist.model.js")(sequelize, Sequelize);
db.in_video_game_library = require("./in_video_game_library.model.js")(sequelize, Sequelize);
db.video_game = require("./video_game.model.js")(sequelize, Sequelize);
db.in_movie_library = require("./in_movie_library.model.js")(sequelize, Sequelize);
db.movie = require("./movie.model.js")(sequelize, Sequelize);
db.in_music_library = require("./in_music_library.model.js")(sequelize, Sequelize);
db.music = require("./music.model.js")(sequelize, Sequelize);
db.genre = require("./genre.model.js")(sequelize, Sequelize);
db.in_book_library = require("./in_book_library.model.js")(sequelize, Sequelize);
db.book = require("./book.model.js")(sequelize, Sequelize);
db.platform = require("./platform.model.js")(sequelize, Sequelize);
db.in_book_wishlist = require("./in_book_wishlist.model.js")(sequelize, Sequelize);
db.in_movie_wishlist = require("./in_movie_wishlist.model.js")(sequelize, Sequelize);
db.in_music_wishlist = require("./in_music_wishlist.model.js")(sequelize, Sequelize);
db.in_video_game_wishlist = require("./in_video_game_wishlist.model.js")(sequelize, Sequelize);

module.exports = db;