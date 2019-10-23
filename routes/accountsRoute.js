const routes = require('express').Router()
const accountController = require('../controllers/account')

routes.get('/register/admin', accountController.addAdmin)
routes.post('/register/admin', accountController.createAdmin)

module.exports = routes