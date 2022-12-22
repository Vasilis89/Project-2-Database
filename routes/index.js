import { Router } from "express";
import characterRoute from "./characters.js";

const router = Router();

router.get("/", (req, res) => {
  res.redirect('/characters')
});

router.use("/characters", characterRoute)

export default router;