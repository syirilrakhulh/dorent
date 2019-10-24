const routes = require('express').Router()
const pageController = require('../controllers')
const motoController = require('../controllers/moto')
const userController = require('../controllers/account')

/** SHOW HOME PAGE OR DASHBOOARD */
routes.get('/', pageController.showPage)
routes.get('/logout', pageController.logout)

/** ADD MOTO on ADMIN ACCOUNT */
routes.get('/addMoto', motoController.add)
routes.post('/addMoto', motoController.create)

/** ADD RENT on USER ACCOUNT */
routes.get('/', userController.addRent)
routes.post('/', userController.createRent)

module.exports = routes