const express = require('express');
const router = express.Router();
const products = require('../components/products/router');
const users = require('../components/users/router');

function routerApp(app) {
  app.use('/', router);
  app.use('/products', products);
  app.use('/users', users);
}

module.exports = routerApp;