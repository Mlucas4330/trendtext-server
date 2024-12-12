const { database } = require('../database')
const { UserCredityPayment } = require('../entities/userCreditPaymentEntity')

const userCreditPaymentRepository = database.getRepository(UserCredityPayment)

module.exports = {
    userCreditPaymentRepository
}