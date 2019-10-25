const routes = require('express').Router()
const pageController = require('../controllers')
const userController = require('../controllers/account')

/** SHOW HOME PAGE OR DASHBOOARD */
routes.get('/', pageController.showPage)
routes.get('/logout', pageController.logout)

/** ADD RENT AND TOPUP on USER ACCOUNT */
routes.get('/', userController.addRent)
routes.post('/', userController.createRent)

module.exports = routes