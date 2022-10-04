const mongoose = require('mongoose')

const BountySchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    ship: {
        type: String
    },
    reward: {
        type: Number
    },
    captured: {
        type: Boolean
    },
    lastSeen: {
        type: String
    }},
    { timestamps: true }
)

module.exports = mongoose.model('Bounty', BountySchema)