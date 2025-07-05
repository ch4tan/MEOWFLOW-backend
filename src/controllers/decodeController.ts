import decode from "../services/decode";
import zodData from "../middleware/zodify";
import { Request, Response } from 'express';

const decodeController = async (req: Request, res: Response) => {
    try {
        const data = zodData(req.body);

        if(data.data.pattern.length === 0) throw new Error("pattern vide");

        const roundInt: number = parseInt(data.data.rounds);
        const decoded: string = decode(data.data.pattern, roundInt);

        res.status(200).json({"data": decoded});
    }
    catch(e: unknown) {
        if(e instanceof Error && e.message === "Types saisis invalides") res.status(409).json({"error": "error type"});
        else res.status(500).json({ error: "server error" });
    }
};

export default decodeController;