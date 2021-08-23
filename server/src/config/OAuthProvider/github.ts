import passport from "passport"
import { Strategy } from "passport-github";

passport.serializeUser((user: Express.User, done) => {
    done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
})

export default function passportGithubConfig(): void{
    passport.use(new Strategy({
        clientID: process.env.CLIENT_ID_GITHUB as string,
        clientSecret: process.env.CLIENT_SECRET_GITHUB as string,
        callbackURL: "http://localhost:4000/auth/github/callback",
        // passReqToCallback: true
      },
      function(accessToken, refreshToken, profile, cb) {
          console.log(accessToken, profile)
          return cb(null, profile)
      }
    ));
}