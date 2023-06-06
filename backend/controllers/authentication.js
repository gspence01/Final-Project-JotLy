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
        res.json({user})
    }
})

module.exports = auth
