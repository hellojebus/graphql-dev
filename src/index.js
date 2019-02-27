const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');


// 2
const resolvers = {
  Query: {
    info: () => "PeopleQL",
    people: () => (root, args, context, info) => {
      return context.prisma.persons();
    },
    person: (root, args, context, info) => {
      return people.find( i => i.id === args.id);
    }
  },
  Mutation : {
    addPerson: (root, args, context, info) => {

      return context.prisma.createPerson({
        name: args.name,
      });

    },
    updatePerson: (root, args, context, info) => {
      let person = people.find( i => i.id === args.id);
      person.name = args.name;
      return person;
    },
    deletePerson: (root, args, context, info) => {
      people = people.filter( i => i.id !== args.id);
      return people;
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));