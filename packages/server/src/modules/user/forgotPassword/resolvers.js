import * as bcrypt from "bcryptjs";
import { changePasswordSchema } from "@ofree/common";

import { createForgotPasswordLink } from "../../../utils/createForgotPasswordLink";
import { expiredKeyError } from "./errorMessages";
import { forgotPasswordPrefix } from "../../../constants";
import { formatYupError } from "../../../utils/formatYupError";
import { sendEmail } from "../../../utils/sendEmail";

export const resolvers = {
  Mutation: {
    sendForgotPasswordEmail: async (_, { email }, { redis, db }) => {
      const user = await db.user({ where: { email } });
      if (!user) {
        return { ok: true };
      }

      const url = await createForgotPasswordLink(
        process.env.FRONTEND_HOST,
        user.id,
        redis
      );
      await sendEmail(email, url, "reset password");
      return true;
    },
    forgotPasswordChange: async (_, { newPassword, key }, { redis }) => {
      const redisKey = `${forgotPasswordPrefix}${key}`;

      const userId = await redis.get(redisKey);
      if (!userId) {
        return [
          {
            path: "newPassword",
            message: expiredKeyError
          }
        ];
      }

      try {
        await changePasswordSchema.validate(
          { newPassword },
          { abortEarly: false }
        );
      } catch (err) {
        return formatYupError(err);
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const updatePromise = await db.updateUser({
        where: { id: userId },
        data: {
          forgotPasswordLocked: false,
          password: hashedPassword
        }
      });

      const deleteKeyPromise = redis.del(redisKey);

      await Promise.all([updatePromise, deleteKeyPromise]);

      return null;
    }
  }
};
