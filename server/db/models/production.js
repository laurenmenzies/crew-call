const Sequelize = require('sequelize');
const db = require('../db');

const Production = db.define('production', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE
    },
    producer: {
        type: Sequelize.STRING
    }
})

module.exports = Production;