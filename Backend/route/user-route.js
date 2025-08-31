import express from 'express';
import User from "../Models/User-model.js";
import { signup, login, logout } from '../controller/user-controller.js';
import { verifyToken } from '../middlewear/authMiddleware.js';
 
const router = express.Router();

router.post("/signup",signup);

router.post("/login",login)

router.post("/logout",logout)

router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;