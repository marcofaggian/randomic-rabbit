import { AuthenticationError } from "apollo-server-errors";

export const isAuthenticated = session => {
  if (!session || !session.userId) {
    throw new AuthenticationError();
  }
};
