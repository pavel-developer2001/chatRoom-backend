const Message = require("../models/message");

// const io = require("../index");
class MessageController {
	async addMessage(req, res) {
		const { messageText, roomId, userId } = req.body;
		const newMessage = await Message.create({
			messageText: messageText,
			userId: userId,
			roomId: roomId,
		});
		res.json({ message: "Сообщение отправлено", data: newMessage });
	}
}
module.exports = new MessageController();
