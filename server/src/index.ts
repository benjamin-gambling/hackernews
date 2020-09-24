const { GraphQLServer, PubSub } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const Query = require("./resolvers/Query.ts");
const Mutation = require("./resolvers/Mutation.ts");
const Subscription = require("./resolvers/Subscription.ts");
const User = require("./resolvers/User.ts");
const Link = require("./resolvers/Link.ts");
const Vote = require("./resolvers/Vote.ts");

const prisma = new PrismaClient();
const pubsub = new PubSub();

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
