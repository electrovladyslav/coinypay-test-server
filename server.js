const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const fibDigits = [1, 2, 3, 5, 8, 13, 21];

app.get('/', (req, res) => {
  res.send(fibDigits);
});

app.post('/', (req, res) => {
  const reqDigit = req.body.n;
  console.log(reqDigit);
  const reqDigitIndex = fibDigits.indexOf(reqDigit);
  console.log(reqDigitIndex);
  if (reqDigitIndex !== -1) {
    
    res.send({"n": fibDigits[reqDigitIndex + 1]});
  } else {
    res.send('Wrong request!');
  }
});

app.listen(3012, () => {
  console.log('Server started');
});