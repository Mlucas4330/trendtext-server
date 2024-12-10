import bcrypt from 'bcryptjs'
import { env } from '../env.js'
import jwt from 'jsonwebtoken'
import { userRepository } from '../repositories/userRepository.js'
import { userSchema } from '../schemas/userSchema.js'

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!password) {
            throw {
                code: 400,
                message: 'Senha deve ser preenchida!'
            }
        }

        if (!email) {
            throw {
                code: 400,
                message: 'Email deve ser preenchido!'
            }
        }

        const user = await userRepository.findOne({ where: { email } })

        if (!user) {
            throw {
                code: 400,
                message: 'Email ou senha inválidos!'
            }
        }

        const matched = await bcrypt.compare(password, user.password)

        if (!matched) {
            throw {
                code: 400,
                message: 'Email ou senha inválidos!'
            }
        }

        const token = jwt.sign(user, env.jwt_secret, { expiresIn: '1h' })

        res.json({
            message: 'Usuário logado com sucesso!',
            token,
            user: { username: user.username, credits: user.credits }
        })
    } catch (err) {
        console.error('Erro no login: ' + err.message)
        res.status(err.code).json(err.message)
    }
}

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const { error } = userSchema.validate(req.body)

        if (error) {
            throw {
                code: 400,
                message: error.details[0].message
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const emailAlreadyExists = await userRepository.findOne({ where: { email } })

        if (emailAlreadyExists) {
            throw {
                code: 400,
                message: 'Email já foi cadastrado!'
            }
        }

        const user = {
            username,
            email,
            password: hashedPassword
        }

        await userRepository.save(user)

        res.status(201).json('Usuário cadastrado com sucesso!')
    } catch (err) {
        console.error('Erro no cadastro: ' + err.message)
        res.status(err.code).json(err.message)
    }
}

export const decrementCredits = async (req, res) => {
    try {
        const { value } = req.body

        const user = await userRepository.findOne({ where: { id: req.user.id } })

        const result = await userRepository.decrement(user.id, 'credits', value)

        if (!result) {
            throw new Error('Erro ao diminuir créditos!')
        }

        res.json(user.credits)
    } catch (err) {
        console.error('Erro na diminuição dos créditos: ' + err.message)
        res.status(500).json('Erro interno de servidor!')
    }
}