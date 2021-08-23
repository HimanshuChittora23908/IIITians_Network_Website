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
        clientID: process.env.CLIENT_ID_GOOGLE as string,
        clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      function(accessToken, refreshToken,profile, cb) {
        console.log(accessToken,profile);
        return cb(null, profile);
      }));
}


