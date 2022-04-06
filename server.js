const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require("cors")

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000
const url = process.env.mongooseConnect
mongoose.connect(url)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongoDB as been connected successfully')
})

const todoRouter = require('./router/todoRouter')

app.use('/todo', todoRouter)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})