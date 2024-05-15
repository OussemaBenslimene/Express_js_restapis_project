const authorController = require("../controllers/authorController")
const express = require("express")
const router = express.Router();

router.get("/author", authorController.getAllAuthors)
router.get("/author/:id", authorController.getOneAuthor)
router.post("/author" , authorController.addAuthor)
router.delete("/author/:id",authorController.removeAuthor)
router.patch("/author/:id" , authorController.updateAuthor)


module.exports = router;