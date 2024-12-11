import dotenv from 'dotenv'

dotenv.config()

export const env = {
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    jwt_secret: process.env.JWT_SECRET,
    node_env: process.env.NODE_ENV,
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
    client_base_url: process.env.CLIENT_BASE_URL,
    base_url: process.env.BASE_URL,
    openai_api_key: process.env.OPENAI_API_KEY,
    assistant_id: process.env.OPENAI_ASSISTANT_ID
}