import { createPost, getAllPosts, getMyPosts, getPost } from "@/controller";
import { authenticate, validate } from "@/middleware";
import { newPostSchema } from "@/schema";
import { Router } from "express";

const postRouter = Router();

postRouter
  .get("/", getAllPosts)
  .get("/me", authenticate, getMyPosts)
  .get("/:postId", getPost)
  .post("/", authenticate, validate(newPostSchema), createPost);

export { postRouter };
