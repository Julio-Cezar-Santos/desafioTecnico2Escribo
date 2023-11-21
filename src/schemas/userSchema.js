const Joi = require("joi");

const userSchema = Joi.object({
	nome: Joi.string().trim().required().messages({
		"any.required": "O campo nome é obrigatório.",
		"string.empty": "O campo nome não pode ser vazio.",
	}),
	email: Joi.string().trim().email().required().messages({
		"any.required": "O campo email é obrigatório.",
		"string.empty": "O campo email não pode ser vazio.",
		"string.email": "O campo email deve ser um endereço de e-mail válido.",
	}),
	senha: Joi.string().trim().min(6).required().messages({
		"any.required": "O campo senha é obrigatório.",
		"string.empty": "O campo senha não pode ser vazio.",
		"string.min": "O campo senha deve ter pelo menos 6 caracteres.",
	}),
	telefones: Joi.array().items(
		Joi.object({
			numero: Joi.string().trim().length(9).required().messages({
				"any.required": "O campo numero é obrigatório para cada telefone.",
				"string.empty": "O campo numero não pode ser vazio.",
				"string.length": "O campo numero deve ter exatamente 9 dígitos.",
			}),
			ddd: Joi.string().trim().length(2).required().messages({
				"any.required": "O campo ddd é obrigatório para cada telefone.",
				"string.empty": "O campo ddd não pode ser vazio.",
				"string.length": "O campo ddd deve ter exatamente 2 dígitos.",
			}),
		})
	),
});

module.exports = userSchema;
