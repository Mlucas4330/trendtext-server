const jwt = require('jsonwebtoken')
const { env } = require('../env')

const authenticateMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(403).json('Acesso negado!')
        }

        const decodedUser = jwt.decode(token, env.jwt_secret)

        req.user = decodedUser

        next()
    } catch (err) {
        console.error(err.message)
        return res.status(401).send('Token inválido!')
    }
}

module.exports = {
    authenticateMiddleware
}