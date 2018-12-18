import { createMiddleware } from "../../../utils/createMiddleware";
import middleware from "./middleware";
import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers = {
  Query: {
    me: createMiddleware(middleware, async (_, __, { session, db }) => {
      const userId = isAuthenticated(session);

      console.log("userId", userId);

      if (userId && userId.errors) {
        return { errors: userId.errors };
      }

      console.log("session.userId", session.userId);

      const user = await db.user({ id: session.userId });
      console.log("user", user);

      return { user };
    })
  }
};
