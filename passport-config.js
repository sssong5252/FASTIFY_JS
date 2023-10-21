// passport-config.js

const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

module.exports = function(passport) {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user || !user.isValidPassword(password)) { 
          return done(null, false); 
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    User.findById(id)
      .then((user)=>{cb(null,user)})
      .catch((err)=>{cb(err,null)});
});
};
