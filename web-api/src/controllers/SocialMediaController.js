const mongoose = require('mongoose')

const SocialMedia = mongoose.model('SocialMedia')

module.exports={
    async index(req, res){
        const socialmedias = await SocialMedia.find()
        
        return res.json(socialmedias)
    },

    async show(req, res){
        const socialmedia = await SocialMedia.findById(req.params.id)

        return res.json(socialmedia)
    },


    async store(req, res){
        const socialmedia = await SocialMedia.create(req.body)

        return res.json(socialmedia)
    },

    async update(req, res){
        const socialmedia = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, {new:true})

        return res.json(socialmedia)
    },

    async destroy(req, res){
        await SocialMedia.findByIdAndRemove(req.params.id)

        return res.send()
    }
}