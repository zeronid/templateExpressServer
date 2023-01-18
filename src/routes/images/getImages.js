const sequelize = require('../../config/db')

const getImages = (req, res) => {
    const get = async () => {
        try {
            const [results, metadata] = await sequelize.query("SELECT * FROM images");
            res.send(results)
        } catch (err) {
            console.error("error executing query:", err);
        } finally {
            await sequelize.close();
        }
    }
    get()
}

module.exports = getImages