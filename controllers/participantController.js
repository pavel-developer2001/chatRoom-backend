const Participant = require("../models/participant");

class ParticipantController {
	async connectParticipant(req, res) {
		const { participantName, roomId, userId } = req.body;
		const newParticipant = await Participant.create({
			participantName,
			roomId,
			userId,
		});
		res.json({
			message: "Подключился новый пользователь",
			data: newParticipant,
		});
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
