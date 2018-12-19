const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

require('dotenv').config();
const app = express();
const port = 3000;

// connect with mLab
mongoose.connect(process.env.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(port, () => console.log(port));
