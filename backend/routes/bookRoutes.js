import express from "express";
import book from "../controllers/bookController.js";
import bookValid from "../middleware/bookValidate.js";

const router = express.Router();

router.post("/registerBook",bookValid.existingBook ,book.registerBook );
router.get("/listBook",book.listBook);
router.get("/listFilterBook/:author?", book.listFilterBook)
router.put("/updateBook", book.updateBook)
router.put("/deleteBook/:_id", book.deleteBook)

export default router;