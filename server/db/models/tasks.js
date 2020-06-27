const Sequelize = require('sequelize');
const db = require('../db');

const Tasks = db.define('tasks', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deadline: {
        type: Sequelize.DATE
    },
    assignedBy: {
        type: Sequelize.STRING
    }
})

module.exports = Tasks;