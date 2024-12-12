import { database } from '../database.js'
import { UserCredityPayment } from '../entities/userCreditPaymentEntity.js'

export const userCreditPaymentRepository = database.getRepository(UserCredityPayment)