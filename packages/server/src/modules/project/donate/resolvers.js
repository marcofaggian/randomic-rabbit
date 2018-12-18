import { isAuthenticated } from "../../shared/isAuthenticated";
import {
  projectNotFoundError,
  userNotFoundError,
  notEnoughPointsError
} from "./errorMessages";

export const resolvers = {
  Mutation: {
    donate: async (_, { data, where }, { session, db }) => {
      const userId = isAuthenticated(session);

      if (userId && userId.errors) {
        return {
          errors: userId.errors
        };
      }

      let project = await db.project({ id: where.projectId });

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

      project.gainedPoints += data.points;

      if (project.gainedPoints > project.targetPoints) {
        return {
          errors: [
            {
              path: "project",
              message: notEnoughPointsError
            }
          ]
        };
      }

      project = await db.updateProject({
        where: { id: where.projectId },
        data: { gainedPoints: project.gainedPoints }
      });

      let user = await db.user({
        id: where.userId
      });

      if (!user) {
        return {
          errors: [
            {
              path: "project",
              message: userNotFoundError
            }
          ]
        };
      }

      user.points -= data.points;

      if (user.points !== 0 && !user.points) {
        return {
          errors: [
            {
              path: "project",
              message: notEnoughPointsError
            }
          ]
        };
      }

      user = await db.updateUser({
        where: { id: where.userId },
        data: { points: user.points }
      });

      return { project, user };
    }
  }
};
