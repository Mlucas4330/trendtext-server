const { database } = require('../database')
const { User } = require('../entities/userEntity')

const userRepository = database.getRepository(User)

module.exports = {
    userRepository
}