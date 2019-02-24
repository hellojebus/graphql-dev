const { GraphQLServer } = require('graphql-yoga');

let people = [
  {id: "1", name: "Zeus"},
  {id: "2", name: "Bruce"},
  {id: "3", name: "Muze"},
];

// 2
const resolvers = {
  Query: {
    info: () => "PeopleQL",
    people: () => people,
    person: (parent, args) => {
      return people.find( i => i.id === args.id);
    }
  },
  Mutation : {
    addPerson: (parent, args) => {
      const person = {
        id: people.length++,
        name: args.name
      };
      people.push(person);
      return person;
    },
    updatePerson: (parent, args ) => {
      let person = people.find( i => i.id === args.id);
      person.name = args.name;
      return person;
    },
    deletePerson: (parent, args) => {
      people = people.filter( i => i.id !== args.id);
      return people;
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));