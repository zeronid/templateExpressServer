const Sequelize = require('sequelize')
const sequelize = require('../../config/db')

const Images = sequelize.define('images', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING
    },
    real: {
        type: Sequelize.BOOLEAN
    },
    setNumber: {
        type: Sequelize.INTEGER
    }
})

module.exports = Images