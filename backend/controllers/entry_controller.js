//DEPENDENCIES
const entries = require('express').Router()
const db = require('../models')
const { Entries } = db

//FIND ALL ENTRIES
entries.get('/', async (req, res) => {
    try {
        const foundEntries = await Entries.findAll()
        res.status(200).json(foundEntries)
    }
    catch(error) {
        res.status(500).json(error)
    }
})

//FIND SPECIFIC ENTRY
entries.get('/:id', async(req, res) => {
    try {
        const foundEntry = await Entries.findOne({
            where: {entry_id: req.params.id}
        });
        res.status(200).json(foundEntry)
    }
    catch(error) {
        res.status(500).json(error)
    }
})

//CREATE ENTRY
entries.post('/', async(req, res) => {
    /*let currentUser;
    try{
        currentUser = await User.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
    } catch {
        currentUser = null;
    }*/
    
    const newEntry = await Entries.create(req.body)
    res.status(200).json({
        message: 'created',
        data: newEntry
    })
    
})

//DELETE
entries.delete('/:id', async(req, res) => {
    try{
        const deletedEntry = await Entries.destroy({
            where: {
                entry_id: req.params.id
            }
        });
        res.status(200).json({
            message: `deleted ${deletedEntry}`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = entries