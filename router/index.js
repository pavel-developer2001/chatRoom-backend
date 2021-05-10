const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");
const roomRoute = require("./roomRoute");
const messageRoute = require("./messageRoute");
const participantRoute = require("./participantRoute");

router.use("/users", userRouter);
router.use("/rooms", roomRoute);
router.use("/messages", messageRoute);
router.use("/participants", participantRoute);

module.exports = router;
