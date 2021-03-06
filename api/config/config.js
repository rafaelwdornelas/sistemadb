require("dotenv").config();
//sql server config
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.SEQUELIZE_SHOW_SQL == 1 ? console.log : null,
    dialectOptions: {
      encrypt: false,
    },
  },
};
