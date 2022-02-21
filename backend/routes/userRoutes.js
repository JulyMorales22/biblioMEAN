import express from "express";
import userController from "../controllers/userController.js";
import userVali from "../middleware/userValidate.js";
import roleVali from "../middleware/roleValidate.js";
const router = express.Router();

router.post("/registerUser", userVali.existingUser, roleVali.existingRole, userController.registerUser)
router.post("/login", userController.login)

router.get("/listuserAdmin", userController.listUserAdmin)
router.get("/listFilterUser/:name?", userController.listFilterUser)
router.put("/deleteUser/:_id", userController.deleteUser )
router.put("/updateUserAdmin", userController.updateUserAdmin)

export default  router ;