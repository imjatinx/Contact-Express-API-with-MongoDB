const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connection status : ', connect.connection.host,'with', connect.connection.name)
    } catch (error) {
        console.log('ERROR from dbConnection=>', error)
        process.exit(1)
    }

}

module.exports = connectDb;