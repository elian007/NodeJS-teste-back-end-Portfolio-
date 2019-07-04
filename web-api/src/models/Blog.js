const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Blog', BlogSchema)