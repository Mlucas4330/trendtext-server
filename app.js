import express, { json } from 'express'
import cors from 'cors'
import { env } from './src/env.js'
import router from './src/router.js'
import cookieParser from 'cookie-parser'
import { database } from './src/datatabase.js'

const main = async () => {
    try {
        const app = express()

        await database.initialize()

        app.use(cors({
            origin: env.client_base_url,
            credentials: true,
        }))

        app.use(json())
        app.use(cookieParser())
        app.use('/api', router)

        app.listen(env.port, () => {
            console.log(`Server running on: ${env.base_url}`)
        })
    } catch (err) {
        console.error(err.message)
    }
}

main()

