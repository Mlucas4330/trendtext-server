import dotenv from 'dotenv'

dotenv.config()

export const env = {
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    jwt_secret: process.env.JWT_SECRET,
    node_env: process.env.NODE_ENV,
    access_token: process.env.ACCESS_TOKEN,
    client_base_url: process.env.CLIENT_BASE_URL,
    base_url: process.env.BASE_URL,
    openai_api_key: process.env.OPENAI_API_KEY,
    assistant_id: process.env.ASSISTANT_ID
}