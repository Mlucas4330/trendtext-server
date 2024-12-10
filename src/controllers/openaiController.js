import OpenAI from 'openai'
import { env } from '../env.js'
import { userRepository } from '../repositories/userRepository.js'

export const assistant = async (req, res) => {
    try {
        const { niche } = req.body

        const openai = new OpenAI({
            apiKey: env.openai_api_key
        })

        const thread = await openai.beta.threads.create()

        await openai.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: niche
        })

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: env.assistant_id,
            model: 'gpt-3.5-turbo'
        })

        let status

        do {
            const retrievedRun = await openai.beta.threads.runs.retrieve(thread.id, run.id)
            status = retrievedRun.status
        } while (status !== 'completed')

        const messages = await openai.beta.threads.messages.list(thread.id)

        const result = messages?.data?.[0]?.content?.[0]?.text?.value

        if (!result) {
            throw new Error('Erro ao gerar frases')
        }

        const data = result.split(';')
            .map(item => item.replaceAll('"', ''))
            .filter(item => item.trim())

        res.json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Erro interno de servidor')
    }
}