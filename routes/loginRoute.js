const routes = require('express').Router()
const accountController = require('../controllers/account')

routes.get('/', accountController.loginPage)
routes.post('/', accountController.login)


module.exports = routes