import passport from "passport";
import { Strategy } from 'passport-discord'

passport.serializeUser((user: Express.User, done) => {
    done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
})


const scopes = ['identify', 'email'];

export default function passportDiscordConfig(): void{
    passport.use(new Strategy({
        clientID: '878241259523825754',
        clientSecret: 'HD-G69i9WyHgA-ZUuYhF5AhGqgzxjkos',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: scopes,
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken, profile);
        return cb(null, profile);
    }));
}