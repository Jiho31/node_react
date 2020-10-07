
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello~~ '));

app.get('/api/hello', (req, res) => res.send("안녕하세요"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));