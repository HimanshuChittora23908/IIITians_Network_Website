import { RegisterResolver } from './resolvers/register/RegisterResolver';
import 'reflect-metadata';
import 'dotenv/config'
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloWorldResolver } from './resolvers/HelloWorldResolver';
import { connectDatabase } from './config/db';
import { authRouter } from './routes/AuthRouter';

import passport from 'passport';
import passportGithubConfig from './config/OAuthProvider/github';
import googlePassportConfig from './config/OAuthProvider/google';
import passportLinkedinConfig from './config/OAuthProvider/linkedin';
import passportDiscordConfig from './config/OAuthProvider/discord';
import connectRedis from 'connect-redis';
import session from "express-session";
import { redis } from './config/redis';
import { ConfirmUserResolver } from './utils/confirmUser';

// import passportFacebookConfig from './config/OAuthProvider/facebook';
// import fs from 'fs';
// import https from 'https';

(async () => {
  // SSL CERT and KEYS
  // const cert = fs.readFileSync('/home/raghhav/selfsigned.crt');
  // const key = fs.readFileSync('/home/raghhav/selfsigned.key')

  const app = express();

  // Express Session MiddleWare
  const RedisStore = connectRedis(session)

  const sessionOption: session.SessionOptions = {
    store: new RedisStore({
      client: redis ,
    }),
    name: "qid",
    secret: "jas5s56su",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
    },
  };

  app.use(session(sessionOption));


  // Passport Middleware
  app.use(passport.initialize())
  passportGithubConfig();
  googlePassportConfig();
  passportLinkedinConfig();
  passportDiscordConfig();
  // passportFacebookConfig();

  app.use('/',authRouter);

  // Databse Connection
  await connectDatabase();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, RegisterResolver, ConfirmUserResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });
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
