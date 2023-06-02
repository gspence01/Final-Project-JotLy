//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Sequelize } = require('sequelize')

const app = express();

//CONFIGURATION
require('dotenv').config()

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//ROOT
app.get('/', (req, res) => {
    res.redirect("/entries")
});

//CONTROLLERS
const entriesController = require('./controllers/entry_controller')
const usersController = require('./controllers/users_controller')

app.use('/entries', entriesController)
app.use('/users', usersController)

//LISTEN
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}. Look at you go!`))

