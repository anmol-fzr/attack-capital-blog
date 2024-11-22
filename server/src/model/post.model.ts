import { Model, model, ObjectId, Schema } from "mongoose";
import { User } from "./user.model";

type IPost = {
  title: string;
  desc: string;
  content: string;
  author: {
    _id: string;
    email: string;
  };
};

const postSchema = new Schema<IPost, Model<IPost>>(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    desc: {
      type: Schema.Types.String,
      required: true,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Post = model<IPost>("posts", postSchema);

export { Post };
