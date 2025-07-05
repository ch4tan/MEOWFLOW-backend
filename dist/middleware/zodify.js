"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const dataSchema = zod_1.z.object({
    pattern: zod_1.z.string().min(1),
    rounds: zod_1.z.string().min(1)
});
const zodData = (data) => {
    const result = dataSchema.safeParse(data);
    if (result.success)
        return result;
    else
        throw new Error("Types saisis invalides");
};
exports.default = zodData;
