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
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			return res.status(401).json({ mensagem: "Sessão inválida" });
		} else {
			return res.status(401).json({ mensagem: "Não autorizado" });
		}
	}
};

module.exports = authenticateSignIn;