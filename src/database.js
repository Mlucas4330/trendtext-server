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
    entities: ['./src/entities/*.js'],
    migrations: ['./src/migrations/*.js']
})