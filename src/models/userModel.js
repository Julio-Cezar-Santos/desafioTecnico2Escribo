const knex = require("../../conection");


const createUser = async (user) => {
	return knex("usuarios").insert(user).returning("*");
};

const getUserByEmail = async (email) => {
	return knex("usuarios").where({ email }).first();
};

const updateUserLastLogin = async (userId) => {
	return knex("usuarios").where({ id: userId }).update({ ultimo_login: new Date().toISOString() }).returning("ultimo_login");
};

module.exports = {
	create: createUser,
	getByEmail: getUserByEmail,
	updateLastLogin: updateUserLastLogin,
};