const mongoose = require('mongoose')

const Work = mongoose.model('Work')

module.exports={
    async index(req, res){
        const works = await Work.find()
        
        return res.json(works)
    },

    async show(req, res){
        const work = await Work.findById(req.params.id)

        return res.json(work)
    },


    async store(req, res){
        const work = await Work.create(req.body)

        return res.json(work)
    },

    async update(req, res){
        const work = await Work.findByIdAndUpdate(req.params.id, req.body, {new:true})

        return res.json(work)
    },

    async destroy(req, res){
        await Work.findByIdAndRemove(req.params.id)

        return res.send()
    }
}