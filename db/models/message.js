const Sequelize = require('sequelize');
const db = require('../db')

module.exports = db.define('message', {
  text: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    // allowNull: false
  }
})
