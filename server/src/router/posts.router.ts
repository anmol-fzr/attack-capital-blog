import { createPost, getAllPosts, getMyPosts } from "@/controller";
import { authenticate, validate } from "@/middleware";
import { newPostSchema } from "@/schema";
import { Router } from "express";

const postRouter = Router();

postRouter
  .get("/", getAllPosts)
  .use(authenticate)
  .get("/me", getMyPosts)
  .post("/", validate(newPostSchema), createPost);

export { postRouter };
