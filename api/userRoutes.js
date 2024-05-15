const userController = require("../controllers/userController")
const express = require("express")
const router = express.Router();

router.get("/user", userController.getAllUsers)
router.get("/user/:id", userController.getOneUser)
router.post("/user" , userController.addUser)
router.delete("/user/:id",userController.removeUser)
router.patch("/user/:id" , userController.updateUser)

router.post("/authUser", userController.authUser)


module.exports = router;