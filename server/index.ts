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

const PORT = process.env.PORT || 4000;

let TYPE = "public";

server.express.use(express.static(`../public`));

server.express.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../public", "index.html`));
});

server.start(() => console.log(`Server started on port ${PORT}`));
