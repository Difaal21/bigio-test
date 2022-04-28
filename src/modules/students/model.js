const { DataTypes } = require('sequelize');
const { sequelize } = require("../../helpers/database/mysql/connection");

const Student = sequelize.define('students', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
});

module.exports = Student;