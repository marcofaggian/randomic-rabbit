import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers = {
  Query: {
    game: async (_, { id }, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      const game = await db.game({ id });

      if (!game) {
        return {
          errors: [
            {
              path: "game",
              message: "Game's id not found"
            }
          ]
        };
      }

      return { game };
    }
  }
};
