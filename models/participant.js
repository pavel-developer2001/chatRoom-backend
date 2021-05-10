const Sequelize = require("sequelize");
const sequelize = require("../db");

const Participant = sequelize.define("participants", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	participantName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Participant;
