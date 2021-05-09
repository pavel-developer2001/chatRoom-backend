const Sequelize = require("sequelize");
const sequelize = require("../db");

const Room = sequelize.define("rooms", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	roomName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	roomText: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	roomPicture: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Room;
