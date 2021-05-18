require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const sequelize = require("./db");

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());
app.use(cors());

app.use(express.static("client/src/static/"));

app.use("/api", router);

// console.log(io);
io.on("connection", (socket) => {
	console.log(socket);
	socket.on("ROOM:JOIN", ({ id, name }) => {
		console.log(`user connection ${id} `);
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
module.exports = server;
