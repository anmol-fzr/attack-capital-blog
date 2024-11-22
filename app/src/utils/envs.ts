const env = process.env;

const envs = Object.freeze({
  SERVER_URL: env.SERVER_URL,
});

export { envs };
