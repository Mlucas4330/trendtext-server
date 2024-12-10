import { Router } from 'express'
import { createPreference, feedback, getCreditPayments } from '../controllers/mercadoPagoController.js'
import { authenticateMiddleware } from '../middlewares/authenticateMiddleware.js'

const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/preference', authenticateMiddleware, (req, res) => createPreference(req, res))
mercadoPagoRouter.get('/feedback', (req, res) => feedback(req, res))
mercadoPagoRouter.get('/credit-payments', authenticateMiddleware, (req, res) => getCreditPayments(req, res))

export default mercadoPagoRouter