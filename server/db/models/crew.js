const Sequelize = require('sequelize');
const db = require('../db');

const Crew = db.define('crew', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Crew;