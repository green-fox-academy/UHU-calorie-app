var supertest = require('supertest');
var main = require('./main.js');
var express = require('express');

var app = express();

main.serverFunction(app);
