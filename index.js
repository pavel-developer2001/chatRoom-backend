require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const sequelize = require("./db");
const bodyParser = require("body-parser");

const server = require("http").Server(app);
const io = require("socket.io")(server);

// module.exports = io;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
	console.log(`user connection ${socket} `);
});
const start = async () => {
	try {
		await sequelize.sync();
		server.listen(PORT, () => console.log(`server start to port is ${PORT}`));
	} catch (err) {
		console.log(err);
	}
};

start();
