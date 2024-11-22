import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { startup } from "@/helper";
import { envs } from "./utils";
import { authRouter, postRouter } from "@/router";

startup();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(helmet());

app.get("/health", (_req, res) => {
  return res.json({ message: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/posts", postRouter);

const { PORT } = envs;

app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
