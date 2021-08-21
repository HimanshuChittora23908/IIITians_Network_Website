import passport from "passport";
import { Strategy } from "passport-google-oauth20";

passport.serializeUser((user: Express.User, done) => {
    done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
})


export default function googlePassportConfig(): void{
    passport.use(new Strategy({
        clientID: "443599361185-nmgs3886hdttebhlacum12ib2r103349.apps.googleusercontent.com",
        clientSecret: "E5RfuMR57Xx9kUsoiX-yIvvj",
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      function(accessToken, refreshToken,profile, cb) {
        console.log(accessToken,profile);
        return cb(null, profile);
      }));
}


