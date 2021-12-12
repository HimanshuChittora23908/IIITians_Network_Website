import express from "express";
export const authRouter = express.Router();
import passport from 'passport'

authRouter.get('/', function(req,res){
  res.redirect('/graphql');
})
authRouter.get('/auth/facebook', passport.authenticate('facebook'));

authRouter.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(_req, res) {
    // Successful authentication, redirect home.
    res.send("Logged In!")
});

authRouter.get('/auth/github',
  passport.authenticate('github'));

authRouter.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login', successRedirect: '/graphql'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send("Logged In!")
});

authRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' , successRedirect: '/graphql', session: true}),
function(req, res) {
  // Successful authentication, redirect home.
  res.send("Logged In!")
});

authRouter.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
);

authRouter.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/graphql',
  failureRedirect: '/login'
}));


authRouter.get('/auth/discord', passport.authenticate('discord'));
authRouter.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.send('Logged In!') // Successful auth
});