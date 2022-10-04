// required packages
const express = require('express')
const cors  = require('cors')

// app config
const app = express()
const PORT = 11000
// connect to db
require('./models')

// middleware
// allow cross origin resource sharing
app.use(cors())
// enable json request body parsing. 
app.use(express.json())

// routes/controllers

app.use('/bounty', require('./controllers/Bounty'))

app.get('/', (req,res) => {
    res.json({ message: 'Welcome to the bounty hunter json api. '})
})

// listen on port
app.listen(PORT, () => {
    console.log(`welcome to the party @ ${PORT}`)
})

