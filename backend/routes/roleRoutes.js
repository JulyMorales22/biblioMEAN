import express from "express";
import roleController from "../controllers/roleController.js";
import roleExistValida from "../middleware/roleexistValid.js";
const router = express.Router();

router.post("/registerRole", roleExistValida.existingRole,roleController.registerRole)
router.get("/listRoleAdmin", roleController.listRoleAdmin)
router.get("/listRoleFilter/:name?", roleController.listRoleFilter)
router.put("/deleteRole/:_id", roleController.deleteRole )
router.put("/updateRole", roleController.updateRole)
export default  router ;