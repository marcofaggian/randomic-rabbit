import { v4 } from "uuid";
import { forgotPasswordPrefix } from "../constants";

export const createForgotPasswordLink = async (url, userId, redis) => {
  const id = v4();
  await redis.set(`${forgotPasswordPrefix}${id}`, userId, "ex", 60 * 20);
  return `${url}/change-password/${id}`;
};
