const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");
const roomRoute = require("./roomRoute");
const messageRoute = require("./messageRoute");

router.use("/users", userRouter);
router.use("/rooms", roomRoute);
router.use("/messages", messageRoute);
module.exports = router;
