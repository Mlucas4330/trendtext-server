import { Router } from 'express'
import userRouter from './routes/userRouter.js'
import mercadoPagoRouter from './routes/mercadoPagoRouter.js'
import openaiRouter from './routes/openaiRouter.js'

const router = Router()

router.use('/users', userRouter)
router.use('/mercadopago', mercadoPagoRouter)
router.use('/openai', openaiRouter)

export default router