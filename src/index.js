const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Person = require('./resolvers/Person');


// 2
const resolvers = {
  Query,
  Mutation,
  User,
  Person
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));