const Sequelize = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define("messages", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	messageText: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Message;
