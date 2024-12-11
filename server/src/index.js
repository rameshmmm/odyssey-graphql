import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

(async function(){
    const apolloServer = new ApolloServer({ typeDefs });      
    const { url } = await startStandaloneServer(apolloServer);
    console.log(`Our graphql server is ⬆️ and 🏃‍♂️ in ${url}`);
})();