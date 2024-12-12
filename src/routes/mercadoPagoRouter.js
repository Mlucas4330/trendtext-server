const { Router } = require('express')
const { createPreference, feedback, getCreditPayments } = require('../controllers/mercadoPagoController')
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware')

const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/preference', authenticateMiddleware, (req, res) => createPreference(req, res))
mercadoPagoRouter.get('/feedback', (req, res) => feedback(req, res))
mercadoPagoRouter.get('/credit-payments', authenticateMiddleware, (req, res) => getCreditPayments(req, res))

module.exports = {
    mercadoPagoRouter
}