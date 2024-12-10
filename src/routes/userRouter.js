import { Router } from 'express'
import { decrementCredits, signIn, signUp } from '../controllers/userController.js'
import { authenticateMiddleware } from '../middlewares/authenticateMiddleware.js'

const userRouter = Router()

userRouter.post('/sign-in', (req, res) => signIn(req, res))
userRouter.post('/sign-up', (req, res) => signUp(req, res))
userRouter.patch('/credits', authenticateMiddleware, (req, res) => decrementCredits(req, res))

export default userRouter