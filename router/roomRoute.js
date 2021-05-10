const Router = require("express");
const router = new Router();
const roomController = require("../controllers/roomController");

router.post("/create", roomController.createRoom);
router.get("/", roomController.getAllRooms);
router.get("/messages/:id", roomController.getMessagesRoom);
router.get("/:id", roomController.getRoom);

module.exports = router;
