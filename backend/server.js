//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//ROOT
app.get('/', (req, res) => {
    res.send({hello: 'hello world'})
})

//LISTEN

app.listen(3001, () => console.log("listening!"))

