import { User } from './entities/userEntity.js'
import { UserCredityPayment } from './entities/userCreditPaymentEntity.js'
import { UserVideo } from './entities/userVideoEntity.js'
import { env } from './env.js'
import { DataSource } from 'typeorm'
import 'reflect-metadata'

export const database = new DataSource({
    type: 'mysql',
    host: env.db_host,
    port: env.db_port,
    username: env.db_user,
    password: env.db_password,
    database: env.db_name,
    entities: [User, UserCredityPayment, UserVideo],
    synchronize: env.node_env === 'development' ? true : false,
    logging: env.node_env === 'development' ? true : false,
    logger: env.node_env === 'development' ? true : false
})