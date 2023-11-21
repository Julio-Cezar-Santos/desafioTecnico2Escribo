const Joi = require("joi");

const singInSchema = Joi.object({
	email: Joi.string().trim().email().required().messages({
		"any.required": "O campo email é obrigatório.",
		"string.empty": "O campo email não pode ser vazio.",
		"string.email": "O campo email deve ser um endereço de e-mail válido.",
	}),
	senha: Joi.string().trim().min(6).required().messages({
		"any.required": "O campo senha é obrigatório.",
		"string.empty": "O campo senha não pode ser vazio.",
		"string.min": "O campo senha deve ter pelo menos 6 caracteres.",
	})
});

module.exports = singInSchema;