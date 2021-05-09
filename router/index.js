const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");
const roomRoute = require("./roomRoute");

router.use("/users", userRouter);
router.use("/rooms", roomRoute);
module.exports = router;
