var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
const port = 3000

// enable ssl redirect
app.use(sslRedirect());

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

console.log('Listening on port ${port}!');
