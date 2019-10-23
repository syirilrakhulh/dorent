const routes = require('express').Router()
const accountController = require('../controllers/account')

routes.get('/:id/topup', accountController.topupPage)
routes.post('/:id/topup', accountController.topup)


module.exports = routes