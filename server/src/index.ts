import 'reflect-metadata';
import 'dotenv/config'
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { connectDatabase } from './config/db';
import { authRouter } from './routes/AuthRouter';
import { Resolvers } from './resolvers/Resolvers';
import { sessionOption } from './config/express-session';
import cookieparser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

import passport from 'passport';
// import './config/OAuthProvider/github';
import './config/OAuthProvider/google';
// import './config/OAuthProvider/linkedin';
// import './config/OAuthProvider/discord';

import session from "express-session";
import contextFn from './types/Context';
import isAuth from './utils/isAuth'
// import passportFacebookConfig from './config/OAuthProvider/facebook';
// import fs from 'fs';
// import https from 'https';

(async () => {
  // SSL CERT and KEYS
  // const cert = fs.readFileSync('/home/raghhav/selfsigned.crt');
  // const key = fs.readFileSync('/home/raghhav/selfsigned.key')

  const app = express();
  app.use(cors({
    credentials: true
  }))

  app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

  // Passport Middleware
  app.use(passport.initialize())
  const passportSessionMiddleware = passport.session();
  // passportFacebookConfig();
  app.use(cookieparser());
  app.use(session(sessionOption));
  app.use(passportSessionMiddleware);
  app.use('/', authRouter);

  // Databse Connection
  await connectDatabase();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: Resolvers as any,
      validate: true,
      authChecker: isAuth
    }),
    context: contextFn,
    introspection: true,
    playground: {
      settings: {
        "request.credentials": "include",
      }
    }
  });

  apolloServer.applyMiddleware({ app });
  const port = process.env.PORT || 4000;

  // HTTPS Server for Facebook OAuth
  // const server = https.createServer({
  //   cert: cert,
  //   key: key
  // }, app)

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
