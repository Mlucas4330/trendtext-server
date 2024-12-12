const { userRepository } = require('../repositories/userRepository')

verifyCredits = async (req, res, next) => {
    const user = await userRepository.findOne({
        where: {
            id: req.user.id
        }
    })

    if (user.credits <= 0) {
        return res.status(403).json('Créditos Insuficientes')
    }

    next()
}

module.exports = {
    verifyCredits
}