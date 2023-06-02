const users = require('express').Router()
const db = require('../models')
const { Users, Entries } = db

users.get('/:username', async (req, res) => {
    try {
        const foundUser = await Users.findOne({
            where:{ username: req.params.username },
            include:{ model: Entries, as: 'posts' }
        })
        res.status(200).json(foundUser)
    } catch (err){
        res.status(500).json(err)
    }
})

users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(200).json({
            message: "created",
            data: newUser
        })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

users.delete('/:id', async(req, res) => {
    try {
        const deletedUser = await Users.destroy({
            where: {user_id: req.params.id }
        })
        res.status(200).json({
            message: `deleted ${deletedUser}`
        })
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = users