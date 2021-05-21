require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const sequelize = require("./db");

const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());

app.use(express.static("client/src/static/"));

app.use("/api", router);

// const participantController = require("./controllers/participantController");
const Participant = require("./models/participant");
const Message = require("./models/message");
io.on("connection", (socket) => {
	console.log("К СОКЕТАМ ПОДКЛЮЧИЛИСЬ!!!", socket.id);
	socket.on("ROOM:JOIN", async ({ id, name, userName }) => {
		console.log(
			`USER CONNECT in ROOM IS ${id}. ROOM NAME IS ${name}. USERNAME IS ${userName} `
		);
		socket.join(`room/${id}`);
		const users = await Participant.findAll({ where: { roomId: id } });
		socket.to(id).emit("ROOM:SET_USERS", users);
	});
	socket.on("ROOM:NEW_MESSAGE", async ({ roomId, userId, text }) => {
		console.log(`ROOM_IS IS ${roomId}. USERNAME IS ${userId}. TEXT IS ${text}`);
		// const newMessage = await Message.create({
		// 	messageText: text,
		// 	userId: userId,
		// 	roomId: roomId,
		// });
		const allMessageRoom = await Message.findAll({ where: { roomId } });
		socket.to(roomId).emit("ROOM:NEW_MESSAGE", allMessageRoom);
	});
	socket.on("disconnect", (socket) => {
		// socket.on("ROOM:EXIT", (socket) => {
		// 	console.log(`EXIT IS ROOM IS ${socket}`);
		// });
	});
});

const PORT = process.env.PORT || 3001;

const start = async () => {
	try {
		await sequelize.sync();
		server.listen(PORT, () => console.log(`server start to port is ${PORT}`));
	} catch (err) {
		console.log(err);
	}
};

start();
// module.exports = server;
