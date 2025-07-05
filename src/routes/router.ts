import express from "express";
import encodeController from "../controllers/encodeController";
import decodeController from "../controllers/decodeController";

const router = express.Router();

router.post("/encode", encodeController);
router.post("/decode", decodeController);

export default router;