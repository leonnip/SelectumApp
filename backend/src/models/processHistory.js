const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProcessHistory = sequelize.define("ProcessHistory", {

    process_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    action: {
        type: DataTypes.STRING
    },

    data: {
        type: DataTypes.JSONB
    },

    previous_hash: {
        type: DataTypes.TEXT
    },

    hash: {
        type: DataTypes.TEXT
    }

});

module.exports = ProcessHistory;