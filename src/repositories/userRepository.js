import { database } from '../database.js'
import { User } from '../entities/userEntity.js'

export const userRepository = database.getRepository(User)