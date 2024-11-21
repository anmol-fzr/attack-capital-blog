type IRes<Data = unknown> = {
  message: string;
  data: Data;
};

export type { IRes };

export * from "./auth";
export * from "./post";
