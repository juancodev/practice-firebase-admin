const express = require('express');
const router = express.Router();
const products = require('../components/products/router');

function routerApp(app) {
  app.use('/', router);
  app.use('/products', products);
}

module.exports = routerApp;