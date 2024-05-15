const studentController = require("../controllers/studentController")
const express = require("express")
const router = express.Router();

router.get("/student", studentController.getAllStudents)
router.get("/hello" , studentController.hello)
router.get("/student/:id", studentController.getOneStudent)
router.post("/student" , studentController.addStudent)
router.delete("/student/:id",studentController.removeStudent)
router.patch("/student/:id" , studentController.updateStudent)


module.exports = router;