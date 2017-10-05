const express = require('express');
const bodyParser = require('body-parser');
const auth = require('basic-auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const fibDigits = [1, 2, 3, 5, 8, 13, 21];

const checkAuth = (req, res) => {
  const credentials = auth(req);

  if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'admin') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
    return false
  } else {
    return true
  }
};

app.get('/', (req, res) => {
  if (checkAuth(req, res)) {
    res.send(fibDigits);
  }
});

const handleReq = (req, res) => {
  const reqDigit = req.body.n;
  const reqDigitIndex = fibDigits.indexOf(reqDigit);
  if (reqDigitIndex !== -1) {
    res.send({"n": fibDigits[reqDigitIndex + 1]});
  } else {
    res.send('-');
  }
};

app.post('/', (req, res) => {
  if (checkAuth(req, res)) {
    handleReq(req, res);
  }
});

app.listen(3012, () => {
  console.log('Server started');
});