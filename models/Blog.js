// req mongoose package
const mongoose = require('mongoose') 

// define child sub document. 
const CommentSchema = new mongoose.Schema({
    header: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

// define parent schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    // 1:M functionality
    comments: [CommentSchema],

    blogger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)