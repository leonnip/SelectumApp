require('dotenv').config();

const { Sequelize } = require("sequelize");

/** 
 * Datos de Acceso a la 
 * base de datos postGres
 * ------------------------
 */
const sequelize = new Sequelize(
    "processdb",
    "postgres",
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: "localhost",
        logging: false
    }
);

module.exports = sequelize;