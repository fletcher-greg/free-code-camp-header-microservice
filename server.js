const express = require('express');

const app = express();

// parse req and return json object
const getInfo = req => ({
  ipaddress: req.ip,
  language: req.headers['accept-language'],
  software: req.headers['user-agent']
});

// middleware that is called on a get for endpoint  ==> /api/whoami
const returnJSON = (req, res) => res.json(getInfo(req)); //  pass req into getInfo which returns json object

//  pass in middlware
app.get('/api/whoami', returnJSON);

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
