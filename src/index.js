require('dotenv').config({ path: __dirname + '/../env/local.env', debug: true })
const app = require('./server.js')
const syncDb = require('./middleware/updateDB.js')
const PORT = 3002

const startServer = () => {
    syncDb()
    app.listen(PORT, () => {
        console.log("listening on port 3002")
    })
}

startServer()
