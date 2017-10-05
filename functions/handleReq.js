const fibDigits = [1, 2, 3, 5, 8, 13, 21];

const handleReq = (req, res) => {
  const reqDigit = req.body.n;
  const reqDigitIndex = fibDigits.indexOf(reqDigit);
  if (reqDigitIndex !== -1) {
    res.send({"n": fibDigits[reqDigitIndex + 1]});
  } else {
    res.send('-');
  }
};

module.exports = handleReq;
