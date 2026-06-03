import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  admin,
  (req, res) => {
    res.json({
      message: "Welcome Admin Dashboard",
    });
  }
);

export default router;