// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  try {
    const ua = useragent.parse(req.headers['user-agent']);
    const language = req.headers['accept-language'].split(',')[0];
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Get software information
    const software = ua.family;

    res.json({ ipaddress: ipAddress, language: language, software: software });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred processing the request.' });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
