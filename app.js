require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const uploadsRouter = require('./routes/upload');

let db_connect = process.env.MONGODB_ATLAS;
mongoose.connect(db_connect, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Database connected')).on('error', (error) => console.log('connection error:', error));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/uploads', uploadsRouter);

module.exports = app;
