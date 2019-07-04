const mongoose = require('mongoose')

const Blog = mongoose.model('Blog')

module.exports={
    async index(req, res){
        const blogs = await Blog.find()
        
        return res.json(blogs)
    },

    async show(req, res){
        const blog = await Blog.findById(req.params.id)

        return res.json(blog)
    },


    async store(req, res){
        const blog  = await Blog.create(req.body)

        return res.json(blog )
    },

    async update(req, res){
        const blog  = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true})

        return res.json(blog )
    },

    async destroy(req, res){
        await Blog.findByIdAndRemove(req.params.id)

        return res.send()
    }
}