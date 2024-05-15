const bookController = require("../controllers/bookController")
const express = require("express")
const router = express.Router();

router.get("/book", bookController.getAllBooks)
router.get("/book/:id", bookController.getOneBook)
router.post("/book" , bookController.addBook)
router.delete("/book/:id",bookController.removeBook)
router.patch("/book/:id" , bookController.updateBook)
router.post("/book_author",bookController.addBookAuthor)



module.exports = router;