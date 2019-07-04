const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const requireDir = require('require-dir')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect ('mongodb://localhost:27012/node-portf', {useNewUrlParser: true}, (err, res) => { 
    if (err) throw err;
    console.log('Database online');
})


requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))

app.listen(3010)