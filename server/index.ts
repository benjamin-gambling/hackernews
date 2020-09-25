const { GraphQLServer, PubSub } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const Query = require("./resolvers/Query.ts");
const Mutation = require("./resolvers/Mutation.ts");
const Subscription = require("./resolvers/Subscription.ts");
const User = require("./resolvers/User.ts");
const Link = require("./resolvers/Link.ts");
const Vote = require("./resolvers/Vote.ts");
const path = require("path");
const express = require("express");

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
  typeDefs: "./server/schema.graphql",
  resolvers,
  context: (request) => {
    ``;
    return {
      ...request,
      prisma,
      pubsub,
    };
  },
});

const PORT = process.env.PORT || 3000;

server.express.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

server.start(() => console.log(`Server started on port ${PORT}`));
