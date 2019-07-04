
const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true

    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Portfolio', PortfolioSchema)