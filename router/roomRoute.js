const Router = require("express");
const router = new Router();
const roomController = require("../controllers/roomController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/create", upload.single("roomPicture"), roomController.createRoom);
router.get("/", roomController.getAllRooms);
router.get("/messages/:id", roomController.getMessagesRoom);
router.get("/:id", roomController.getRoom);

module.exports = router;
