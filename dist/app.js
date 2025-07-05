"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: "https://meowflow-frontend.vercel.app",
    methods: ["POST, GET"],
}));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
