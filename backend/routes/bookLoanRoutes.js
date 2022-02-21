import express from "express";
import bookValid from "../middleware/bookLoanValidate.js";
import userValid from "../middleware/userBook.js";
import bookLoan from "../controllers/bookLoanController.js";

const router = express.Router();

router.post("/registerBookLoan", bookValid.existingBooks, userValid.existingUsers, bookLoan.registerBookLoan)

export default router;