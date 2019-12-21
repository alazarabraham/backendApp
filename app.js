var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
    };

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const artistRouter = require('./routes/artist')

var app = express();
const cors = require('cors')
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/artist', artistRouter);
app.use('/users', usersRouter);

module.exports = app;
