import bcryptjs from "bcryptjs";

async function hash(rawPass: string) {
  const salt = await bcryptjs.genSalt(8);
  const hashedPass = await bcryptjs.hash(rawPass, salt);
  return hashedPass;
}

async function compare(rawPass: string, hashedPass: string) {
  const isPassMatch = await bcryptjs.compare(rawPass, hashedPass);
  return isPassMatch;
}

const passHelper = {
  hash,
  compare,
} as const;

export { passHelper };
