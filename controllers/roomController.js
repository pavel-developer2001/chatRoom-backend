const Room = require("../models/room");
const Message = require("../models/message");
const Participant = require("../models/participant");
var multer = require("multer");
var upload = multer().single("roomPicture");
class RoomController {
	async createRoom(req, res) {
		console.log("IMGADESSSSSSSSS", req.file);
		// console.log("rommPictire", req.files.roomPicture);
		console.log("data", req.body);
		const { roomName, roomText, roomPicture, userId } = req.body;
		const findRoom = await Room.findOne({ where: { roomName: roomName } });
		if (roomName === "") {
			res.json({ message: "Введите имя комнаты" });
		}
		if (findRoom) {
			res
				.status(404)
				.json({ message: "Комната с таким название уже существует" });
		}
		// upload(req, res, function (err) {
		// 	if (err instanceof multer.MulterError) {
		// 		// A Multer error occurred when uploading.
		// 	} else if (err) {
		// 		// An unknown error occurred when uploading.
		// 	}
		// });
		const newRoom = await Room.create({
			roomName: roomName,
			roomText: roomText,
			roomPicture,
			userId: Number(userId),
		});
		console.log("NEW ROOOOOOOOOOOOOOM", newRoom);
		res.json({ message: "Комната создана!!!", data: newRoom });
	}
	async getAllRooms(req, res) {
		const rooms = await Room.findAll();
		res.json({ data: rooms });
	}
	async getMessagesRoom(req, res) {
		const { id } = req.params;
		const messages = await Message.findAll({ where: { roomId: id } });
		res.json({
			message: "Все сообщения этой комнаты",
			data: messages,
		});
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
