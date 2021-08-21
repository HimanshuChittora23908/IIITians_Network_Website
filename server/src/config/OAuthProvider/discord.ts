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
        clientID: process.env.CLIENT_ID_DISCORD as string,
        clientSecret: process.env.CLIENT_SECRET_DISCORD as string,
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: scopes,
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken, profile);
        return cb(null, profile);
    }));
}