const express = require('express'); 
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const routes = require('./Routes/PostsRoutes');
app.use('/', routes);

module.exports = app;
