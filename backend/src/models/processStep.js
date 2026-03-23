const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProcessStep = sequelize.define("ProcessStep", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    step_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = ProcessStep;