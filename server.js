import apollo from "apollo-server"
const {ApolloServer} = apollo

// GRAPHQL
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const port = config.PORT

server.listen(port)
// ## Dashboard
// ## Orders
// ## Mesas