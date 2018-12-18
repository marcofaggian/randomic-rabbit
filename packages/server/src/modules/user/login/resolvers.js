import bcrypt from "bcryptjs";

import { userSessionIdPrefix } from "../../../constants";
import {
  invalidLogin,
  confirmEmailError,
  forgotPasswordLockedError
} from "./errorMessages";

const errorResponse = [
  {
    path: "email",
    message: invalidLogin
  }
];

export const resolvers = {
  Mutation: {
    login: async (_, { email, password }, { session, redis, req, db }) => {
      let user = await db.user({ email });
      if (!user) {
        return { errors: errorResponse };
      }

      if (!user.confirmed) {
        return {
          errors: [
            {
              path: "email",
              message: confirmEmailError
            }
          ]
        };
      }

      if (user.forgotPassowordLocked) {
        return {
          errors: [
            {
              path: "email",
              message: forgotPasswordLockedError
            }
          ]
        };
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return {
          errors: errorResponse
        };
      }

      // setting null the password
      user = {
        ...user,
        password: null
      };

      // set the cookie for the user
      session.userId = user.id;
      console.log(session);
      if (req.sessionID) {
        await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
      }

      return { sessionId: req.sessionID, user };
    }
  }
};
