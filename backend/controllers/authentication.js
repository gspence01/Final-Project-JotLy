const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { Users } = db

auth.post('/', async (req, res) => {
    let user = await Users.findOne({
        where: {username: req.body.username}  
    })
    
    if(!user || !await bcrypt.compare(req.body.passwordDigest, user.passwordDigest)){
        res.status(404).json({
            message: 'Something\'s not right. Please check your username or password!'
        })
    } else {
        req.session.user_id = user.user_id
        res.json({user})
    }
})

auth.get('/profile', async (req, res) => {
    console.log('hi',req.session.user_id)
    try{
        let user = await Users.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})

module.exports = auth
