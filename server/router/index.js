const express = require('express');
const router = express.Router();
const products = require('../components/products/router');
const users = require('../components/users/router');
const login = require('../components/login/router');
const middleware = require('../middlewares/sessions');
const dashboard = require('../components/dashboard/router');

function routerApp(app) {
  app.use('/', router);
  app.use('/users', users);
  app.use('/login', login);
  app.use(middleware.auth);
  app.use('/products', products);
  // app.use('/dashboard', dashboard);
}

module.exports = routerApp;