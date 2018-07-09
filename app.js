const http = require('http');
const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('html',require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
