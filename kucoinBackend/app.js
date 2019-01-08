const express  = require('express');
const app = express();
const cors = require('cors')
const http=require('http');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session')
const cookieParser = require('cookie-parser')

// const userRouter = require('./Routes/user')
require('express-async-errors');
//connection Database
require('./Database/condb')



var server=http.createServer(app);
server.on('listening',function(){
    console.log('ok, server is running');
});

// static folder
app.use(express.static(__dirname + '/static'));
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Cors Middleware
app.use(cors())
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
    
})
//bodyParser MiddleWare
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

// express sesseion
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

// User Router
app.use('/user',require('./Routes/user'));
// products Router
app.use('/',require('./Routes/product'));

//create error Middleware
app.use((req,res,next)=>{
    req.status = 404;
    const error = new Error('Page Not Found')
    next(error);
})

// Handle Error  Middleware
app.use((error,req,res,next)=>{
    res.status(req.status || 500).send({
        message:error.message
    })
})



server.listen(1000,()=>{
console.log('Server is starting in port 1000')
})