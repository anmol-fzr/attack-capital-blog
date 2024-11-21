import { z } from "zod";

const createPostSchema = z.object({
  title: z.string(),
});

export { createPostSchema };
