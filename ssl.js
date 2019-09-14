var express = require('express');
var app = express();
var url = 'portfolio.sarahbeecroft.me';

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  } else {
    next();
  }
});

app.use(express.static('build'));