const knex = require("../../conection");

const createPhone = async (userId, phone) => {
	return knex("telefones").insert({ usuario_id: userId, ...phone }).returning("*");
};

module.exports = {
	create: createPhone,
};