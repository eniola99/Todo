const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        NewTask: String,
        description: String,
    }
)
module.exports = mongoose.model('todo', todoSchema)