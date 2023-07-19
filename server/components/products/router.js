const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  controller.getProducts()
    .then((productsList) => response.success(req, res, productsList, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
})

router.post('/', (req, res) => {
  controller.addProduct(req.body)
    .then((product) => response.success(req, res, product, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;