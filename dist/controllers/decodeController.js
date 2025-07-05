"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decode_1 = __importDefault(require("../services/decode"));
const zodify_1 = __importDefault(require("../middleware/zodify"));
const decodeController = async (req, res) => {
    try {
        const data = (0, zodify_1.default)(req.body);
        if (data.data.pattern.length === 0)
            throw new Error("pattern vide");
        const roundInt = parseInt(data.data.rounds);
        const decoded = (0, decode_1.default)(data.data.pattern, roundInt);
        res.status(200).json({ "data": decoded });
    }
    catch (e) {
        if (e instanceof Error && e.message === "Types saisis invalides")
            res.status(409).json({ "error": "error type" });
        else
            res.status(500).json({ error: "server error" });
    }
};
exports.default = decodeController;
