import { redis } from "../redis";

export const confirmEmail = async (req, res, db) => {
  const { id } = req.params;
  const userId = await redis.get(id);
  if (userId) {
    await db
      .updateUser({
        where: { id: userId },
        data: { confirmed: true }
      })
      .catch(e => {
        console.log(e);
        res.sendStatus(500);
      });
    await redis.del(id);
    res.redirect(`${process.env.FRONTEND_HOST}/login`);
  } else {
    res.send("invalid");
  }
};
