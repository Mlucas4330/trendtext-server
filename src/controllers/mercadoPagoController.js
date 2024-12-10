import { MercadoPagoConfig, Preference } from 'mercadopago'
import { env } from '../env.js'
import { userCreditPaymentRepository } from '../repositories/userCreditPaymentRepository.js'

export const createPreference = async (req, res) => {
    try {
        const { title, quantity, unit_price } = req.body

        const client = new MercadoPagoConfig({ accessToken: env.access_token })

        const preference = new Preference(client)

        const { id, init_point, sandbox_init_point } = await preference.create({
            body: {
                payment_methods: {
                    excluded_payment_methods: [
                        {
                            id: 'pec'
                        }
                    ],
                    excluded_payment_types: [
                        {
                            id: 'debit_card'
                        }
                    ],
                    installments: 1
                },
                items: [
                    {
                        title,
                        quantity,
                        unit_price
                    }
                ],
                back_urls: {
                    'success': env.base_url + '/mercadopago/feedback',
                    'failure': env.base_url + '/mercadopago/feedback',
                    'pending': env.base_url + '/mercadopago/feedback',
                },
                auto_return: 'all',
            }
        })

        res.json({
            id,
            init_point,
            sandbox_init_point
        })
    } catch (err) {
        console.error('Erro na criação de preferência: ' + err.message)
        res.status(500).json('Erro interno de servidor')
    }
}

export const feedback = async (req, res) => {
    try {
        const client = new MercadoPagoConfig({ accessToken: env.access_token })

        const preference = new Preference(client)

        const { status, preference_id } = req.query

        if (!status) {
            return res.redirect(env.client_base_url + '/pricing')
        }

        if (status == 'success') {
            const preferenceData = await preference.get({
                preferenceId: preference_id
            })

            const creditPayment = {
                title: preferenceData.items[0].title,
                price: preferenceData.items[0].unit_price
            }

            const result = await userCreditPaymentRepository.save(creditPayment)

            if (result) {
                return res.redirect(env.client_base_url + '/create')
            }
        }
    } catch (err) {
        console.error('Erro no feedback: ' + err.message)
        res.status(500).json('Erro interno de servidor')
    }
}

export const getCreditPayments = async (req, res) => {
    try {
        const result = await userCreditPaymentRepository.find({
            where: {
                user: {
                    id: req.user.id
                }
            }
        })

        res.json(result)
    } catch (err) {
        console.error('Erro na busca do histórico de pagamentos: ' + err.message)
        res.status(500).json('Erro interno de servidor')
    }
}