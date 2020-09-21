const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => "not null",
    feed: () => links,
    link: (parent, args) => links.find((post) => post.id === args.id),
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updatePost: (parent, args) => {
      const link = links.find((post) => post.id === args.id);
      if (args.url) link.url = args.url;
      if (args.description) link.description = args.description;
      return link;
    },
    deletePost: (parent, args) => {
      const postIndex = links.findIndex((post) => post.id === args.id);
      if (postIndex >= 0) links.splice(postIndex, 1);
    },
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
