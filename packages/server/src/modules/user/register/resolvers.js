import { validUserSchema } from "@ofree/common";
import bcrypt from "bcrypt";

import { duplicateEmail } from "./errorMessages";
import { createConfirmEmailLink } from "./createConfirmEmailLink";
import { sendEmail } from "../../../utils/sendEmail";

export const resolvers = {
  Mutation: {
    register: async (_, args, { redis, url, db }) => {
      try {
        await validUserSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      let { email, password } = args;

      const userAlreadyExists = await db.user({
        email
      });

      console.log(userAlreadyExists);

      if (userAlreadyExists) {
        return [
          {
            path: "email",
            message: duplicateEmail
          }
        ];
      }

      password = await bcrypt.hash(password, 10);

      const user = await db.createUser({
        email,
        password
      });

      if (process.env.NODE_ENV !== "test") {
        await sendEmail(
          email,
          await createConfirmEmailLink(url, user.id, redis),
          "Confirm email"
        );
      }

      return null;
    }
  }
};
