import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers = {
  Query: {
    listAllProjects: async (_, __, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      const projects = await db.projects({ first: 20 });

      console.log(projects);

      return { projects };
    }
  }
};
