// req mongoose package
const mongoose = require('mongoose')
const models = require('.')

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
    comments: [CommentSchema]
},{
    timestamps: true
})

models.export = mongoose.model('Blog', BlogSchema)