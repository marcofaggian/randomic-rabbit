import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers = {
  Query: {
    listAllGames: async (_, __, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      const games = await db.games({ first: 20 });

      console.log(games);

      return { games };
    }
  }
};
