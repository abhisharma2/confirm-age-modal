var express = require('express');
var app = express();
var path = require('path');

// view engine & assets setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', {
    title: "Confirm Age Modal JS",
    description: "Simple script to pop up modal",
  });
})

app.get('/page1', function (req, res) {
  res.render('page1', {
    title: "Confirm Age Modal JS",
    description: "Simple script to pop up modal",
  });
})

app.get('/page2', function (req, res) {
  res.render('page2', {
    title: "Confirm Age Modal JS",
    description: "Simple script to pop up modal",
  });
})

app.get('/error', function (req, res) {
  res.render('error', {
    title: "Confirm Age Modal JS",
    description: "Simple script to pop up modal",
  });
})

//*** Starting server functions ***//

/**
 * Get port from environment and store in Express.
 */

var http = require('http');
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

