const routes = require('express').Router()
const pageController = require('../controllers')

/** SHOW HOME PAGE OR DASHBOOARD */
routes.get('/', pageController.showPage)
routes.get('/logout', pageController.logout)

module.exports = routes