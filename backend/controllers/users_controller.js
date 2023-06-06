const users = require('express').Router()
const db = require('../models')
const { Users, Entries } = db
const bcrypt = require('bcrypt')

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
    let {passwordDigest, ...rest} = req.body;
    try {
        const user = await Users.create({
            ...rest,
            passwordDigest: await bcrypt.hash(passwordDigest, 10)
        })
        res.status(200).json(user)
    } catch (err){
        console.log(err)
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