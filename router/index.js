const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");

router.use("/users", userRouter);
module.exports = router;
