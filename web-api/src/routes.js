const express = require('express')
const routes = express.Router()

const WorkController = require('./controllers/WorkController')
const PortfolioController = require('./controllers/PortfolioController')
const SocialMediaController = require('./controllers/SocialMediaController')
const ProfileController = require('./controllers/ProfileController')
const BlogController = require('./controllers/BlogController')


//work
routes.get('/work', WorkController.index)
routes.post('/work', WorkController.store)
routes.get('/work/:id', WorkController.show)
routes.put('/work/:id', WorkController.update)
routes.delete('/work/:id', WorkController.destroy)

//Portfolio
routes.get('/portfolio', PortfolioController.index)
routes.post('/portfolio', PortfolioController.store)
routes.get('/portfolio/:id', PortfolioController.show)
routes.put('/portfolio/:id', PortfolioController.update)
routes.delete('/portfolio/:id', PortfolioController.destroy)

//SocialMedia
routes.get('/socialmedia', SocialMediaController.index)
routes.post('/socialmedia', SocialMediaController.store)
routes.get('/socialmedia/:id', SocialMediaController.show)
routes.put('/socialmedia/:id', SocialMediaController.update)
routes.delete('/socialmedia/:id', SocialMediaController.destroy)

//Profile
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.store)
routes.get('/profile/:id', ProfileController.show)
routes.put('/profile/:id', ProfileController.update)
routes.delete('/profile/:id', ProfileController.destroy)

//Blog
routes.get('/blog', BlogController.index)
routes.post('/blog', BlogController.store)
routes.get('/blog/:id', BlogController.show)
routes.put('/blog/:id', BlogController.update)
routes.delete('/blog/:id', BlogController.destroy)


module.exports = routes