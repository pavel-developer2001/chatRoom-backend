const Router = require("express");
const router = new Router();
const messageController = require("../controllers/messageController");

router.post("/add", messageController.addMessage);
module.exports = router;
