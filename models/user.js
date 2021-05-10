const Sequelize = require("sequelize");
const sequelize = require("../db");
const Message = require("./message");
const Room = require("./room");

const User = sequelize.define("users", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER,
	},
	user: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});
User.hasMany(Room);
Room.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

module.exports = User;
