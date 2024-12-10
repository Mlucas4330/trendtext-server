import { database } from '../datatabase.js'
import { User } from '../entities/userEntity.js'

export const userRepository = database.getRepository(User)