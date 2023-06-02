//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//CONFIGURATION
require('dotenv').config()

//MIDDLEWARE
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//CONTROLLERS
app.use(express.urlencoded({extended: true}))

const entriesController = require('./controllers/entry_controller')
const usersController = require('./controllers/users_controller')

app.use('/entries', entriesController)
app.use('/users', usersController)

//LISTEN
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}. Look at you go!`))

