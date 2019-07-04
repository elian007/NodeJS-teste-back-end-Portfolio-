const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Profile', ProfileSchema)