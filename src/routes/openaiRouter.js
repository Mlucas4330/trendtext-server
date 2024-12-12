const { Router } = require('express')
const { assistant } = require('../controllers/openaiController')
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware')
const { verifyCredits } = require('../middlewares/verifyCredits')

const openaiRouter = Router()

openaiRouter.post('/assistant', [authenticateMiddleware, verifyCredits], (req, res, next) => assistant(req, res, next))

module.exports = {
    openaiRouter
}