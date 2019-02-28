
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const routePath = path.join(config.path.app, '/config/routes');
const routes = require(routePath);

const middlewarePath = path.join(config.path.app, '/middlewares');
const middlewares = require(middlewarePath);

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded with deep objects

app.use('/', routes); // this should be last in middleware order
app.use(middlewares.error.handle); // this should be last in app.use

module.exports = app;
