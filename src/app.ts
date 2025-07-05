import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/router";

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST, GET"],
}));

app.use(helmet());
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});