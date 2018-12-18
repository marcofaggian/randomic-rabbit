import { removeAllUsersSessions } from "../../../utils/removeAllUsersSessions";

export const resolvers = {
  Mutation: {
    logout: async (_, __, { session, redis, res }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      if (session.userId) {
        await removeAllUsersSessions(session.userId, redis);
        await session.destroy(err => {
          if (err) {
            console.log(err);
          }
        });
        await res.clearCookie("qid");
        return true;
      }

      return false;
    }
  }
};
