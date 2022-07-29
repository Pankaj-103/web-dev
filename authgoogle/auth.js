const passport=require('passport');
const  GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '60310748347-ea3aa5n5i0p3vf6pbrpdu531kndc3p00.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, profile);
    });
  }
));


passport.serializeUser(function(user,done){
   done(null,user);  
})

passport.deserializeUser(function(user,done){
    done(null,user);  
 })