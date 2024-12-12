const { Router } = require('express')
const { decrementCredits, signIn, signUp } = require('../controllers/userController')
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware')

const userRouter = Router()

userRouter.post('/sign-in', (req, res) => signIn(req, res))
userRouter.post('/sign-up', (req, res) => signUp(req, res))
userRouter.patch('/credits', authenticateMiddleware, (req, res) => decrementCredits(req, res))

module.exports = {
    userRouter
}