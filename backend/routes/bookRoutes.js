import express from "express";
import book from "../controllers/bookController.js";

const router = express.Router();

router.post("/registerBook", book.registerBook );

router.get("/listBook", book.listBook);
router.get("/listFilterBook/:author?", book.listFilterBook)

export default router;