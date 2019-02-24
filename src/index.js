const { GraphQLServer } = require('graphql-yoga');

let people = [
  {id: 1, name: "Zeus"},
  {id: 2, name: "Bruce"},
  {id: 3, name: "Muze"},
];

// 2
const resolvers = {
  Query: {
    info: () => "PeopleQL",
    people: () => people
  },
  Mutation : {
    addPerson: (parent, args) => {
      const person = {
        id: people.length++,
        name: args.name
      };
      people.push(person);
      return person;
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));