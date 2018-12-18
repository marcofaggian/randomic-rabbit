import { isAuthenticated } from "../../shared/isAuthenticated";
import { projectNotFoundError } from "./errorMessages";

export const resolvers = {
  Mutation: {
    updateProject: async (_, { data, where }, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      const project = await db.updateProject({ where, data });

      if (!project) {
        return {
          errors: [
            {
              path: "project",
              message: projectNotFoundError
            }
          ]
        };
      }

      return { project };
    }
  }
};
