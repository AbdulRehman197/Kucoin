const userRouter = require('express').Router();
const mongoose = require('mongoose')
const registerUser =require('../Controller/users')
const passport = require('passport')
require('../Database/Models/user')
const User = mongoose.model('user')
var LocalStrategy = require('passport-local').Strategy;


// //Register User
userRouter.post('/',  (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
        username: username                //findone({},function(err,data){ res.josn(data) })
    },
        (err, user) => {
            if (!user) {
                var newUser = new User({
                    name: name,
                    email: email,
                    username: username,
                    password: password
                });
                User.createUser(newUser, (err, user) => {
                    if (err) throw err;
                    res.json(user);
                })
            }

        });
   
})
// userRouter.use(registerUser.auth)
passport.use('local' , new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});


userRouter.post('/login',(passport.authenticate('local'),(req,res)=>{
        
    var username = req.body.username;
    User.findOne({ username:username},(err,user)=>{
        if(err) throw err
        res.json(user)
        console.log(user)
       
    })
}))
// userRouter.get('/', registerUser.loginData)
// userRouter.get('/logout',  (req, res)=> {
// 	req.logout();
// })
// userRouter.post('/login',
// passport.authenticate('local'),
// function (req, res) {
// 	res.json(req.data);
// });

// userRouter.get('/logout', function (req, res) {
// req.logout();

// req.flash('success_msg', 'You are logged out');

// // res.redirect('/users/login');
// });



module.exports = userRouter;