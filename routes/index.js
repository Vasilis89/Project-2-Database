import { router } from 'express';
import characterRoutes from "./characters.js";

const router = Router();

router.get("./", (req, res) => {
  res.send("This is the route")
});

router.use("./characters.js", characterRoutes)
