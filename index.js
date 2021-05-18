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

io.on("connection", (socket) => {
	console.log("К СОКЕТАМ ПОДКЛЮЧИЛИСЬ!!!", socket.id);
	socket.on("ROOM:JOIN", ({ id, name, userName }) => {
		console.log(
			`USER CONNECT in ROOM IS ${id}. ROOM NAME IS ${name}. USERNAME IS ${userName} `
		);
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
