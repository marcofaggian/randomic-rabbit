/**
 * NPM packages
 */
const { ApolloServer } = require("apollo-server");
import { RedisPubSub } from "graphql-redis-subscriptions";
import gql from "graphql-tag";

/**
 * Our Packages
 */
const { redis } = require("./redis");

if (process.env.NODE_ENV === "test") {
  redis.flushall();
}

/**
 * Connecting to Redis PubSub
 */
const pubsub = new RedisPubSub({
  connection: "redis:6379"
});

let timeout;

function randomicRabbit() {
  let time = Math.floor(Math.random() * 10) + 1;
  console.log("time to elapse: ", time);

  let timeout = setTimeout(() => {
    const number = Math.floor(Math.random() * 100);

    console.log("number generated: ", number);

    pubsub.publish("number", {
      numberGenerated: { number, timeAwaited: time }
    });

    randomicRabbit();
  }, time * 1000);
}

/**
 * Generating the server
 */
const server = new ApolloServer({
  typeDefs: gql`
    type Subscription {
      numberGenerated: RandomNumber
    }
    type RandomNumber {
      number: Int
      timeAwaited: Int
    }
    type Query {
      number: Int
    }
  `,
  resolvers: {
    Subscription: {
      numberGenerated: {
        subscribe: () => pubsub.asyncIterator("number")
      }
    }
  },
  subscriptions: {
    onConnect: () => {
      randomicRabbit();
    },
    onDisconnect: () => {
      clearTimeout(timeout);
    }
  }
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
