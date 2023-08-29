const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.post('/', (req, res) => {
  const authorization = req.headers.authorization;
  controller.loginUser(authorization.split(" ")[1])
    .then((message) => response.success(req, res, message, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

module.exports = router;