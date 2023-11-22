const jwt = require("jsonwebtoken");
const phoneModel = require("../models/phoneModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
	try {
		const {
			nome,
			email,
			senha,
			telefones
		} = req.body;

		const existingUser = await userModel.getByEmail(email);
		if (existingUser) {
			return res.status(400).json({ mensagem: "E-mail já cadastrado" });
		}
		const hashedPassword = await bcrypt.hash(senha, 10);

		const user = {
			nome,
			email,
			senha: hashedPassword,
			data_criacao: new Date().toISOString(),
			data_atualizacao: null,
			ultimo_login: new Date().toISOString(),
		};

		const newUser = await userModel.create(user);

		if (telefones && telefones.length > 0) {
			await Promise.all(
				telefones.map(async (telefone) => {
					await phoneModel.create(newUser[0].id, telefone);
				})
			);
		}

		const token = jwt.sign({ id: newUser[0].id }, process.env.JWT_SECRET, { expiresIn: "5m" });

		const updateLogin = await userModel.updateLastLogin(newUser[0].id);

		const result = {
			id: newUser[0].id,
			data_criacao: newUser[0].data_criacao,
			data_atualizacao: newUser[0].data_atualizacao,
			ultimo_login: updateLogin[0].ultimo_login,
			token,
		};

		return res.status(201).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ mensagem: "Erro interno do servidor" });
	}
};

module.exports = signUp;