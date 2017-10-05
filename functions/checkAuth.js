const auth = require('basic-auth');

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

module.exports = checkAuth;