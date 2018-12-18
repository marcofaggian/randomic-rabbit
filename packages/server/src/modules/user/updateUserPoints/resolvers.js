export const resolvers = {
  Mutation: {
    updateUserPoints: async (_, { data, where }, { db }) => {
      if (!where || !where.id) {
        return {
          errors: [
            {
              path: "points",
              message: "Invalid User id"
            }
          ]
        };
      }
      const { id } = where;

      let user = await db.user({ id });
      if (!user) {
        return {
          errors: [
            {
              path: "points",
              message: "Invalid User id"
            }
          ]
        };
      }

      if (!data || !data.points) {
        return {
          errors: [
            {
              path: "points",
              message: "Invalid points amount"
            }
          ]
        };
      }
      const { points } = data;

      user = await db.updateUser({
        where: { id },
        data: {
          points: user.points + points,
          pointsCounter: user.pointsCounter + points
        }
      });

      return { user };
    }
  }
};
