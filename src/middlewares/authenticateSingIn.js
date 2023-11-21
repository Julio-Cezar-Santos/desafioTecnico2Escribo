const jwt = require("jsonwebtoken");
const knex = require("../../conection");


const authenticateSignIn = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ mensagem: "Não autorizado" });
	}

	try {
		const token = authorization.split(" ")[1];

		const { id } = jwt.verify(token, process.env.JWT_SECRET);

		const user = await knex("usuarios").where({ id }).first();

		req.loggedInUser = user;

		next();
	} catch (erro) {
		return res.status(500).json({ mensagem: "Erro interno do servidor" });
	}
};

module.exports = authenticateSignIn;