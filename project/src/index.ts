import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";

import { HelloWorldResolver } from "../src/resolvers/HelloWorldResolver"
import { ideaResolver } from "../src/resolvers/idea"

const main = async () => {

    const schema = await buildSchema({
        resolvers: [HelloWorldResolver, ideaResolver]
    });

    const apolloServer = new ApolloServer({ schema });

    const app = Express();

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("server started on http://localhost:4000/graphql");
    });
};

main();
