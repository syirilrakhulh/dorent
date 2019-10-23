const routes = require('express').Router()
const motoController = require('../controllers/moto')

routes.get('/:id', motoController.showData)

module.exports = routes