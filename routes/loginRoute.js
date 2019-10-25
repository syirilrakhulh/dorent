const routes = require('express').Router()
const accountController = require('../controllers/account')
const controller = require('../controllers')

routes.get('/', accountController.loginPage)
routes.post('/', accountController.login)
routes.get('/logout', controller.logout)

module.exports = routes