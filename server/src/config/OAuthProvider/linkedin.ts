import passport from "passport";
import { Strategy } from 'passport-linkedin-oauth2';

passport.serializeUser((user: Express.User, done) => {
  done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
})

export default function passportLinkedinConfig(): void{
    passport.use(new Strategy({
        clientID: process.env.CLIENT_ID_LINKEDIN as string,
        clientSecret: process.env.CLIENT_SECRET_LINKEDIN as string,
        callbackURL: "http://localhost:4000/auth/linkedin/callback",
        scope: ['r_emailaddress', 'r_liteprofile']
      }, function(accessToken, refreshToken, profile, cb) {
          console.log(profile);
          return cb(null, profile)
        // asynchronous verification, for effect...
        // process.nextTick(function () {
        //   // To keep the example simple, the user's LinkedIn profile is returned to
        //   // represent the logged-in user. In a typical application, you would want
        //   // to associate the LinkedIn account with a user record in your database,
        //   // and return that user instead.
        //   return done(null, profile);
        // });
      }));
}