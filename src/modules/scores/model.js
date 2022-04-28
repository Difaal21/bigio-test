const { DataTypes } = require('sequelize');
const { sequelize } = require("../../helpers/database/mysql/connection");

const Score = sequelize.define('student_scores', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scores: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
});

module.exports = Score;