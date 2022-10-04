const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/bountyServer'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`connected at ${db.host}:${db.port}`))

db.on('error', err => console.warn("server down", err))

module.exports = {
    Bounty: require('./Bounty')
}