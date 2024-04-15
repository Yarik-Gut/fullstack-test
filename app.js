const express = require('express');
const app = express();
const mongoose = require('mongoose');
const newsRouter = require('./routes/news');
const keys = require('./config/keys')

app.use(express.json());

app.use('/api/news', newsRouter);

app.use(require('morgan')('dev'))
app.use(require('cors')())

mongoose.connect(keys.MONGODB_URI)
    .then(() => console.log('Підключено до MongoDB...'))
    .catch(err => console.error('Не вдалося підключитися до MongoDB...', err));

module.exports = app;
