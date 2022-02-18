import express from "express";
import roleController from "../controllers/roleController.js";
import roleExistValida from "../middleware/roleexistValid.js";
const router = express.Router();

router.post("/registerRole", roleExistValida.existingRole,roleController.registerRole)
router.get("/listRole", roleController.listRole)

export default  router ;