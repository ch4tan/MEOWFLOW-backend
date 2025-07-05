import { z } from "zod";

const dataSchema = z.object({
  pattern: z.string().min(1),
  rounds: z.string().min(1)
});

type DataType = z.infer<typeof dataSchema>;

const zodData = (data: unknown) => {
  const result = dataSchema.safeParse(data);

  if(result.success) return result;
  else throw new Error("Types saisis invalides");
};

export default zodData;