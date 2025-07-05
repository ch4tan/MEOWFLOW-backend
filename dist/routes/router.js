"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const encodeController_1 = __importDefault(require("../controllers/encodeController"));
const decodeController_1 = __importDefault(require("../controllers/decodeController"));
const router = express_1.default.Router();
router.post("/encode", encodeController_1.default);
router.post("/decode", decodeController_1.default);
exports.default = router;
