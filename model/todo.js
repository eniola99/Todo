const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        description: String,
    }
)
module.exports = mongoose.model('todo', todoSchema)