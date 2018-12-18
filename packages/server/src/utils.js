class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

function getUserId(ctx) {
  if (ctx.request.session.userId) {
    return ctx.request.session.userId;
  }

  throw new AuthError();
}

module.exports = {
  getUserId
};
