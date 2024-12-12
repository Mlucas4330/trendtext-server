const express = require('express')
const { json } = require('express')
const cors = require('cors')
const { env } = require('./src/env')
const { router } = require('./src/router')
const cookieParser = require('cookie-parser')
const { database } = require('./src/database')

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
        app.use(router)

        app.listen(env.port, () => {
            console.log(`Server running on: ${env.base_url}`)
        })
    } catch (err) {
        console.error(err.message)
    }
}

main()

