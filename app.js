'use strict';

const express = require('express');
const app = express();

const repeat = require('./routes/repeat');
const talk = require('./routes/talk');
const log = require('./middleware/log');

app.use(express.json());
app.use(log);

app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;
