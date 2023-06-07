//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookie = require('cookie-session')

const app = express();

//CONFIGURATION
require('dotenv').config()

//MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookie({
    name: 'session',
    keys: [process.env.SESSION_PASS],
    maxAge: 24 * 60 * 60 * 1000
}))

//CONTROLLERS
app.use(express.urlencoded({extended: true}))

app.use('/entries', require('./controllers/entry_controller'))
app.use('/users', require('./controllers/users_controller'))
app.use('/authentication', require('./controllers/authentication'))

//LISTEN
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}. Look at you go!`))

