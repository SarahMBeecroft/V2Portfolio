const express = require('express');
const app     = express();
const http    = require('http');
const https   = require('https');
const fs      = require('fs');
 
const sslOptions  = {
  key: fs.readFileSync('./ssl/privatekey.pem'),
  cert: fs.readFileSync('./ssl/certificate.pem')
};
 
const server    = http.createServer(app);
const sslServer = https.createServer(sslOptions, app);
 
const redirectHttps = require('express-redirect-https');
let redirectOptions = {
  allowForwardForHeader: true,
  httpsPort: 3043
};
 
  
// Or for a single
app.get('/', redirectHttps(redirectOptions), function(request, response, next) {
  response.send('https://portfolio.sarahbeecroft.me');
});
 
 
server.listen(3000);
sslServer.listen(3043);