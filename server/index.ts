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
const compression = require("compression");
const helmet = require("helmet");

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

server.express.use(helmet({ contentSecurityPolicy: false }));
server.express.use(compression());

const PORT = process.env.PORT || 4000;

server.express.use(express.static(`../build`));

server.express.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../build/index.html`));
});

server.start(() => console.log(`Server started on port ${PORT}`));
