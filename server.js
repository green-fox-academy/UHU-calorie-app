'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/hello', function(res,req) {
  console.log('Hello World' + res + req);
});
