const users = require('express').Router()
const db = require('../models')
const { Users } = db

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

module.exports = users