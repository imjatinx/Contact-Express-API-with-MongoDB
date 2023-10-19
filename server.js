const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5001

app.use(express.json())

app.use('/api/contacts', require('./routes/contactRoutes'))

// Tell the express to use this middleware
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('server is running on the port', port)
})