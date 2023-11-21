const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const singIn = async (req, res) => {
	// eslint-disable-next-line no-unused-vars
	const { email, senha: senhaBody } = req.body;

	try {
		const user = await userModel.getByEmail(email);

		if (!user) {
			return res.status(404).json({ mensagem: "Usuário e/ou senha inválido(s)." });
		}

		const isPasswordValid = await bcrypt.compare(senhaBody, user.senha);
		if (!isPasswordValid) {
			return res.status(401).json({ mensagem: "Usuário e/ou senha inválido(s)." });
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "30m" });
	
		const updateLogin = await userModel.updateLastLogin(user.id);
		const loggedInUser = {
			id: user.id,
			data_criacao: user.data_criacao,
			data_atualizacao: user.data_atualizacao,
			ultimo_login: updateLogin[0].ultimo_login,
			token
		};

		return res.status(200).json( loggedInUser );
	} catch (error) {
		return res.status(500).json({ mensagem: "Erro interno do servidor" });
	}
};

module.exports = singIn;