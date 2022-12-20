import { Router } from 'express'
import * as controllers from "../controllers/Character.js";

const router = Router();

router.get("/", controllers.getCharacter);
router.get("/:id", controllers.getCharacter);
router.post("/", controllers.createCharacter);
router.put("/:id", controllers.updateCharacter);
router.delete("/:id", controllers.deleteCharacter);

export default router;
