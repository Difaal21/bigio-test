const { DataTypes } = require('sequelize');
const { sequelize } = require("../../helpers/database/mysql/connection");

const Teacher = sequelize.define('teachers', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
});

module.exports = Teacher;