import { User } from './entities/userEntity.js'
import { UserCredityPayment } from './entities/userCreditPaymentEntity.js'
import { UserVideo } from './entities/userVideoEntity.js'
import { env } from './env.js'
import { DataSource } from 'typeorm'
import 'reflect-metadata'

export const database = new DataSource({
    type: 'mysql',
    host: env.host,
    port: env.db_port,
    username: env.user,
    password: env.password,
    database: env.database,
    entities: [User, UserCredityPayment, UserVideo],
    synchronize: env.node_env === 'development' ? true : false,
    logging: env.node_env === 'development' ? true : false
})