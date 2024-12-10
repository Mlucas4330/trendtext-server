import { database } from '../datatabase.js'
import { UserCredityPayment } from '../entities/userCreditPaymentEntity.js'

export const userCreditPaymentRepository = database.getRepository(UserCredityPayment)