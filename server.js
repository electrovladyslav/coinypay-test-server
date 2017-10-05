const express = require('express');
const bodyParser = require('body-parser');
const checkAuth = require('./functions/checkAuth');
const handleReq = require('./functions/handleReq');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  if (checkAuth(req, res)) {
    res.send('Access allowed');
  }
});

app.post('/', (req, res) => {
  if (checkAuth(req, res)) {
    handleReq(req, res);
  }
});

app.listen(3012, () => {
  console.log('Server started');
});