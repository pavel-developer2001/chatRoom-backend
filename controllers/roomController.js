const Room = require("../models/room");
class RoomController {
	async createRoom(req, res) {
		const { roomName, roomText, roomPicture } = req.body;
		const findRoom = await Room.findOne({ where: { roomName: roomName } });
		if (roomName === "") {
			res.json({ message: "Введите имя комнаты" });
		}
		if (findRoom) {
			res
				.status(404)
				.json({ message: "Комната с таким название уже существует" });
		}
		const newRoom = await Room.create({
			roomName: roomName,
			roomText: roomText,
			roomPicture: roomPicture,
			userId: 2,
		});
		res.json({ message: "Комната создана!!!", data: newRoom });
	}
	async getAllRooms(req, res) {
		const rooms = await Room.findAll();
		res.json({ data: rooms });
	}
	async getRoom(req, res) {
		const { id } = req.params;
		const room = await Room.findOne({ where: { id: id } });
		if (!room) {
			res.json({ message: "Такой комнаты не существует!!!" });
		}
		res.json({ data: room });
	}
}
module.exports = new RoomController();
