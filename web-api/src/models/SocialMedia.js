
const mongoose = require('mongoose')

const SocialMediaSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    link:{
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

mongoose.model('SocialMedia', SocialMediaSchema)