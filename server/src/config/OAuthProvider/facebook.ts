import passport from 'passport';
import { Strategy } from 'passport-facebook'

export default function passportFacebookConfig(): void{
    passport.use(new Strategy({
        // clientID: process.env.CLIENT_ID_FACEBOOK as string,
        clientID: '1418666465195988',
        // clientSecret: process.env.CLIENT_SECRET_FACEBOOK as string,
        clientSecret: "3f85f7c5ddd8971ae3fb7e9571b9f087",
        callbackURL: "https://localhost:4000/auth/facebook/callback",
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken, profile, refreshToken);
      }
    ));
}