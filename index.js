const { ApolloServer } = require('apollo-server');
const { typeDefs  } = require('./type_defs');
const { resolvers } = require('./resolvers');

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: process.env.PORT}).then(({ url }) => {
    console.log(`schema ready at ${url}`);
});