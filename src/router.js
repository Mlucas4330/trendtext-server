const { Router } = require('express')
const { userRouter } = require('./routes/userRouter')
const { mercadoPagoRouter } = require('./routes/mercadoPagoRouter')
const { openaiRouter } = require('./routes/openaiRouter')

const router = Router()

router.use('/users', userRouter)
router.use('/mercadopago', mercadoPagoRouter)
router.use('/openai', openaiRouter)

module.exports = {
    router
}