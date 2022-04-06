const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        newTask: String,
        description: String,
    }
)
module.exports = mongoose.model('todo', todoSchema)