const express = require('express');
const app = express();
const mongoose = require('mongoose');
const newsRouter = require('./routes/news');
const keys = require('./config/keys');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 });


app.use(express.json());

app.use('/api/news', newsRouter);

app.use(require('morgan')('dev'))
app.use(require('cors')())

mongoose.connect(keys.MONGODB_URI)
    .then(() => console.log('Підключено до MongoDB...'))
    .catch(err => console.error('Не вдалося підключитися до MongoDB...', err));

app.use((req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedData = cache.get(key);
    if (cachedData) {
        res.json(cachedData);
    } else {
        res.sendResponse = res.json;
        res.json = (body) => {
            cache.set(key, body);
            res.sendResponse(body);
        };
        next();
    }
});

module.exports = app;
