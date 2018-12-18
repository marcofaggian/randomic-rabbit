import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers = {
  Query: {
    project: async (_, { id }, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      const project = await db.project({ id });

      if (!project) {
        return {
          errors: [
            {
              path: "project",
              message: "Project's id not found"
            }
          ]
        };
      }

      return { project };
    }
  }
};
