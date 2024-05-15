const borrowingController = require("../controllers/borrowingController")
const express = require("express")
const router = express.Router();

router.get("/borrowing", borrowingController.getAllBorrowings)
router.get("/borrowing/:id", borrowingController.getOneBorrowing)
router.post("/borrowing" , borrowingController.addBorrowing)
router.delete("/borrowing/:id",borrowingController.removeBorrowing)
router.patch("/borrowing/:id" , borrowingController.updateBorrowing)


router.get("/borrowing_date/:date", borrowingController.researchDate)





module.exports = router;