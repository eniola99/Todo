const express = require('express')
const cors = require('cors')
const todo = require('../model/todo')

const router = express.Router()

router.post('/register', async (req, res) => {
    todos = new todo({
        description: req.body.description
    })
    try {
        const saveTodo = await todos.save()
        res.status(200).json('saved successfully')
    } catch (err) {
        res.status(400).json('something went wrong')
    }
})

router.get('/find', async (req, res) => {
    try {
        const todoList = await todo.find()
        res.status(200).json(todoList)
    } catch (err) {
        res.status(404).json('not found')
    }
})

router.get('/find/:id', async (req, res) => {
    
    try {
        const findTodo = await todo.findById(req.params.id)
        res.status(200).json(findTodo)
    } catch (err) {
     res.status(404).json('not found')   
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateTodo = await todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json('updated')
    } catch (err) {
        res.status(500).json('unexpected error, try again')
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await users.findByIdAndDelete(req.params.id)
        res.status(200).json(`account as been deleted`)
    } catch (err) {
        res.status(500).json(`can't delete user`)
    }
})

module.exports = router