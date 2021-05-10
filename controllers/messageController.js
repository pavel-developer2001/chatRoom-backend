const Message = require("../models/message");

// const io = require("../index");
class MessageController {
	async addMessage(req, res) {
		const { messageText } = req.body;
		const newMessage = await Message.create({
			messageText: messageText,
			userId: 7,
			roomId: 16,
		});
		res.json({ message: "Сообщение отправлено", data: newMessage });
	}
}
module.exports = new MessageController();
