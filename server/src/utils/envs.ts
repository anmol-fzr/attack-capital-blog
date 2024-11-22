const env = process.env;

const envs = Object.freeze({
  isDev: env.MODE === "DEV",

  PORT: env.PORT ?? 8000,
  MONGO_URI: env.MONGO_URI ?? "",
  JWT_SECRET_KEY: env.JWT_SECRET ?? "",
});

export { envs };
