const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },

    // array of objects that references the blongs that users has

    blogs: [{
        // tell mogoose that this is a reference, 
        type: mongoose.Schema.Types.ObjectId,
        // tell mongoose what is being referenced.
        ref: 'Blog'
    }]
})

module.exports = mongoose.model('User', UserSchema)