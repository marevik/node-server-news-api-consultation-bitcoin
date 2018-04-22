const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Auth = require('./api/models/auth');
const Users = require('./api/models/users');
const Order = require('./api/models/order');
const newsRoutes =require('./api/routes/newsRouter');
const authRoutes = require('./api/routes/auth');
const usersRoutes = require('./api/routes/users');
const orderRoutes = require('./api/routes/orderRoutes');
const app = express();

//mongoose.connect('mongodb+srv://umoney:sasa1307@umoney-cloud-axhat.mongodb.net/test');
mongoose.connect('mongodb://localhost:27017/nodeApi');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log("connected");
});


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.all((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "*");
    // if(req.method === 'OPTIONS') res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');     
    next();
});

// app.use('/auth', authRoutes);
// app.use('/users', usersRoutes);
app.use('/order', orderRoutes);
app.use('/news',newsRoutes);


// Errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message
        }
    });
});
app.use('/', (req, res) =>{
    res.status(200).json({
        "message": "Default response on main route."
    });
});

module.exports = app;