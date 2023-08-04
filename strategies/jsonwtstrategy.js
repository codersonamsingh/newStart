const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("myUser");

//const myKey = require()

var opts = {};
opts.jsonFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "awer"

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) =>{
            User.findById(jwt_payload.id)
            .then(User => {
                if(user)
            })
        })
    )
}

