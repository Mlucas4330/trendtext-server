import { Router } from 'express'
import { assistant } from '../controllers/openaiController.js'
import { authenticateMiddleware } from '../middlewares/authenticateMiddleware.js'
import { verifyCredits } from '../middlewares/verifyCredits.js'

const openaiRouter = Router()

openaiRouter.post('/assistant', [authenticateMiddleware, verifyCredits], (req, res, next) => assistant(req, res, next))

export default openaiRouter