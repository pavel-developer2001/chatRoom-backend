const Participant = require("../models/participant");
// const server = require("../index");
// const io = require("socket.io")(server);

class ParticipantController {
	async connectParticipant(req, res) {
		try {
			const { participantName, roomId, userId } = req.body;
			// io.on("connection", (socket) => {
			// 	console.log(socket);
			// 	socket.on("ROOM:JOIN", ({ id, name }) => {
			// 		console.log(`user connection ${id} `);
			// 	});
			// });
			const newParticipant = await Participant.create({
				participantName,
				roomId,
				userId,
			});
			res.json({
				message: "Подключился новый пользователь",
				data: newParticipant,
			});
		} catch (e) {
			console.log(e);
		}
	}
	async disconnectParticipant(req, res) {
		const { userId } = req.query;
		const deleteParticipant = await Participant.destroy({
			where: { userId: userId },
		});
		res.json({
			message: "Пользователь вышел из комнаты",
			data: deleteParticipant,
		});
	}
	async getParticipantsRoom(req, res) {
		const { roomId } = req.query;
		const participants = await Participant.findAll({
			where: { roomId: roomId },
		});
		res.json({ message: "Участники комнаты", participants });
	}
}
module.exports = new ParticipantController();
