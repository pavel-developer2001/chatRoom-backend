const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

// router.get("/", userController.test);
router.post("/login", userController.login);
router.post("/register", userController.register);
module.exports = router;
