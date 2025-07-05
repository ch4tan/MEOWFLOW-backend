"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encode_1 = __importDefault(require("../services/encode"));
const zodify_1 = __importDefault(require("../middleware/zodify"));
const encodeController = async (req, res) => {
    try {
        const data = (0, zodify_1.default)(req.body);
        if (data.data.pattern.length === 0)
            throw new Error("pattern vide");
        const roundInt = parseInt(data.data.rounds);
        const encoded = (0, encode_1.default)(data.data.pattern, roundInt);
        res.status(200).json({ "data": encoded });
    }
    catch (e) {
        if (e instanceof Error && e.message === "Types saisis invalides")
            res.status(409).json({ "error": "error type" });
        else
            res.status(500).json({ error: "server error" });
    }
};
exports.default = encodeController;
