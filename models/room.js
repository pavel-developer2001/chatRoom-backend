const Sequelize = require("sequelize");
const sequelize = require("../db");
const Message = require("./message");

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
Room.hasMany(Message);
Message.belongsTo(Room);

module.exports = Room;
