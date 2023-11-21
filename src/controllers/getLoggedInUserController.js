const getLoggedInUser = async (req, res) => {
	const user = req.loggedInUser;
	try {
		return res.json(user);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro interno do servidor" });
	}
};

module.exports = getLoggedInUser;
