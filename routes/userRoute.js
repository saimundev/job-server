import express from "express";
import { emailVerifier, signIn, singUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/sign-up",singUp)
router.post("/email-verifier",emailVerifier)
router.post("/sign-in",signIn)

export default router;