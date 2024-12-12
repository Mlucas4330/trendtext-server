const Joi = require('joi')

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        'string.min': 'O nome deve ter pelo menos 3 caracteres',
        'string.max': 'O nome deve ter no máximo 30 caracteres',
        'any.required': 'Usuário é um campo obrigatório'
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'O email deve ser uma string válida',
        'string.email': 'Por favor, insira um email válido',
        'any.required': 'O email é obrigatório'
    }),
    password: Joi.string().min(6).max(99).required().messages({
        'string.base': 'A senha deve ser uma string',
        'string.min': 'A senha deve ter pelo menos 6 caracteres',
        'string.max': 'A senha não pode ter mais de 99 caracteres',
        'any.required': 'A senha é obrigatória'
    })
})

module.exports = {
    userSchema
}