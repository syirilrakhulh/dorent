const routes = require('express').Router()
const accountController = require('../controllers/account')

routes.get('/', accountController.index)

routes.get('/admin', accountController.addAdmin)
routes.post('/admin', accountController.createAdmin)

module.exports = routes