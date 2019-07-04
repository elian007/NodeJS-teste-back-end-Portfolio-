
const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
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
    icon_name: {
        type: String
    },
    image: {
        type: String
        
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Work', WorkSchema)