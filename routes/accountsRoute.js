const routes = require('express').Router()
const accountController = require('../controllers/account')

routes.get('/admin', accountController.addAdmin)
routes.post('/admin', accountController.createAdmin)
routes.get('/user', accountController.addUser)
routes.post('/user', accountController.createUser)

module.exports = routes