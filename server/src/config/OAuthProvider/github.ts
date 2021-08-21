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
        clientID: "7ee42823ac86f41ddfb8",
        clientSecret: "f79ec56357b513ebb004779c77c599a63b749378",
        callbackURL: "http://localhost:4000/auth/github/callback",
        // passReqToCallback: true
      },
      function(accessToken, refreshToken, profile, cb) {
          console.log(accessToken, profile)
          return cb(null, profile)
      }
    ));
}