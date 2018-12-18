import Dataloader from "dataloader";

const batchUsers = async (ids, db) => {
  const users = db.users({ where: { ids } });
  const userMap = {};
  users.forEach(u => {
    userMap[u.id] = u;
  });

  return ids.map(id => userMap[id]);
};

export const userLoader = db => new Dataloader(ids => batchUsers(ids, db));
