var express = require('express');
var sslRedirect = require('strong-ssl-redirect');
var app = express();
var environment = 'production'  /* 'other' 'development', 'production'*/
app.use(sslRedirect({
  environment,
  www: true,
  status: 301
}));

// If you want to force the request to redirect from https://google.com to https://www.google.com set the www property to true like so. ```javascript `www: true`