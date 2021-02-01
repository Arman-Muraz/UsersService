require("dotenv").config();
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require("cors");
let bodyParser = require("body-parser")
const formidableMiddleware = require('express-formidable');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let PORT = process.env.PORT || 8080;

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//true
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(formidableMiddleware());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/registration', function (req, res) {
   return res.sendFile(path.join(__dirname + '/public/index.html'));
});



app.use('/submit', usersRouter);


module.exports = app;
