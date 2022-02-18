import express from "express";
import userController from "../controllers/userController.js";
import userVali from "../middleware/userValidate.js";
import roleVali from "../middleware/roleValidate.js";
const router = express.Router();

router.post("/registerUser", userVali.existingUser, roleVali.existingRole, userController.registerUser)

router.get("/listuser", userController.listUser)
router.get("/listFilterUser/:name?", userController.listFilterUser)

export default  router ;