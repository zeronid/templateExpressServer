const sequelize = require('../config/db')
const Images = require('../models/images/images')

const syncDb = async () => {
    await sequelize.sync();
}

module.exports = syncDb