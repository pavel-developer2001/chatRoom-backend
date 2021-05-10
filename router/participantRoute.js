const Router = require("express");
const router = new Router();
const participantController = require("../controllers/participantController");

router.post("/connect", participantController.connectParticipant);
router.delete("", participantController.disconnectParticipant);
router.get("", participantController.getParticipantsRoom);
module.exports = router;
