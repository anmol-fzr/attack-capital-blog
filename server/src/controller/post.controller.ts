import { Request, Response } from "express";
import { newPostSchema } from "@/schema";
import { z } from "zod";
import { Post } from "@/model";
import { Aggregate, Types } from "mongoose";

const ObjectId = Types.ObjectId;

type PostBody = z.infer<typeof newPostSchema>["body"];

const getPost = async (req: Request, res: Response) => {
  const postId = req.params.postId;

  const post = await Post.findById(postId).select("title content");

  return res.json({ data: post });
};

const getAllPosts = async (_req: Request, res: Response) => {
  const aggr = new Aggregate();

  aggr.lookup({
    from: "users",
    localField: "authorId",
    foreignField: "_id",
    as: "author",
  });

  aggr.unwind({
    path: "$author",
    preserveNullAndEmptyArrays: true,
  });

  aggr.project({
    updatedAt: 0,
    authorId: 0,
    author: {
      _id: 0,
      passwordHash: 0,
      createdAt: 0,
      updatedAt: 0,
    },
  });

  aggr.sort({
    createdAt: -1,
  });

  const pipeline = aggr.pipeline();

  const posts = await Post.aggregate(pipeline);

  return res.json({ data: posts });
};

const createPost = async (req: Request, res: Response) => {
  const { title, desc, content }: PostBody = req.body;
  const { userId } = req.user;

  const authorId = new ObjectId(userId);

  const newPost = new Post({
    title,
    desc,
    content,
    authorId,
  });

  const savedPost = await newPost.save();

  return res.json({ data: savedPost, message: "Post Published Successfully" });
};

const getMyPosts = async (req: Request, res: Response) => {
  const authorId = req.user.userId;

  const aggr = new Aggregate();

  aggr.match({
    $expr: {
      $regexMatch: {
        input: { $toString: "$authorId" },
        regex: authorId,
        options: "i",
      },
    },
  });

  aggr.lookup({
    from: "users",
    localField: "authorId",
    foreignField: "_id",
    as: "author",
  });

  aggr.unwind({
    path: "$author",
    preserveNullAndEmptyArrays: true,
  });

  aggr.project({
    updatedAt: 0,
    authorId: 0,
    author: {
      _id: 0,
      passwordHash: 0,
      createdAt: 0,
      updatedAt: 0,
    },
  });

  aggr.sort({
    createdAt: -1,
  });

  const pipeline = aggr.pipeline();

  const posts = await Post.aggregate(pipeline);

  return res.json({ data: posts });
};

export { createPost, getAllPosts, getMyPosts, getPost };
